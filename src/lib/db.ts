// src/lib/db.ts
// Central data access layer with Supabase primary storage and local JSON fallback.
// Exports utility functions and re-exports the Application type for shared use.

import {
  insertApplication,
  fetchApplications,
  updateStatus as updateSupabaseApplicationStatus,
  Application,
} from "./supabaseClient";
import fs from "fs";
import path from "path";

// Re-export the Application interface for other modules (e.g., admin page).
export type { Application };

// Path for local JSON fallback storage
const LOCAL_DB_PATH = path.join(process.cwd(), "src/data/db.json");

/** Ensure the local DB directory and file exist */
function ensureLocalDbExists() {
  const dir = path.dirname(LOCAL_DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify([]));
  }
}

/** Save an application – tries Supabase first, falls back to local JSON */
export async function saveApplication(appData: Application): Promise<void> {
  const inserted = await insertApplication(appData);
  if (!inserted) {
    console.warn("Supabase insert failed, falling back to local storage.");
    ensureLocalDbExists();
    const raw = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
    const applications: Application[] = JSON.parse(raw);
    if (!appData.created_at) {
      appData.created_at = new Date().toISOString();
    }
    applications.push(appData);
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(applications, null, 2));
  }
}

/** Retrieve all applications – prefers Supabase, otherwise uses local JSON */
export async function getApplications(): Promise<Application[]> {
  try {
    const supabaseList = await fetchApplications();
    if (supabaseList && supabaseList.length > 0) {
      return supabaseList;
    }
  } catch (e) {
    console.warn("Supabase fetch failed, falling back to local storage:", e);
  }

  // Local fallback
  ensureLocalDbExists();
  const raw = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
  const list: Application[] = JSON.parse(raw);
  return list.sort(
    (a, b) =>
      new Date(b.created_at ?? 0).getTime() - new Date(a.created_at ?? 0).getTime()
  );
}

/** Update an application's status – Supabase first, fallback to local JSON */
export async function updateApplicationStatus(
  id: string,
  status: Application["status"]
): Promise<boolean> {
  try {
    const updated = await updateSupabaseApplicationStatus(id, status);
    if (updated) return true;
  } catch (e) {
    console.warn("Supabase status update failed, falling back to local storage:", e);
  }

  // Local fallback
  ensureLocalDbExists();
  const raw = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
  const applications: Application[] = JSON.parse(raw);
  const idx = applications.findIndex((app) => app.id === id);
  if (idx !== -1) {
    applications[idx].status = status;
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(applications, null, 2));
    return true;
  }
  return false;
}
