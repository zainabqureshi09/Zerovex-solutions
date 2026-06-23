import { db, isFirebaseConfigured } from "./firebase";
import { collection, addDoc, getDocs, doc, updateDoc, query, orderBy } from "firebase/firestore";
import fs from "fs";
import path from "path";

export interface Application {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  city: string;
  educationLevel: string;
  selectedField: string;
  skills: string;
  portfolioUrl: string;
  whyInternship: string;
  availability: string;
  consent: boolean;
  status: "Pending" | "Shortlisted" | "Interview Scheduled" | "Accepted" | "Rejected";
  createdAt: string;
}

const LOCAL_DB_PATH = path.join(process.cwd(), "src/data/db.json");

function ensureLocalDbExists() {
  const dir = path.dirname(LOCAL_DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(LOCAL_DB_PATH)) {
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify([]));
  }
}

export async function saveApplication(appData: Application): Promise<void> {
  if (isFirebaseConfigured && db) {
    try {
      await addDoc(collection(db, "internship_applications"), appData);
      return;
    } catch (e) {
      console.warn("Failed to write to Firebase Firestore, falling back to local storage:", e);
    }
  }

  // Fallback to local storage JSON
  ensureLocalDbExists();
  const fileContent = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
  const applications: Application[] = JSON.parse(fileContent);
  applications.push(appData);
  fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(applications, null, 2));
}

export async function getApplications(): Promise<Application[]> {
  if (isFirebaseConfigured && db) {
    try {
      const q = query(collection(db, "internship_applications"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const list: Application[] = [];
      snapshot.forEach((docSnap) => {
        list.push(docSnap.data() as Application);
      });
      return list;
    } catch (e) {
      console.warn("Failed to read from Firebase Firestore, falling back to local storage:", e);
    }
  }

  // Fallback to local storage JSON
  ensureLocalDbExists();
  const fileContent = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
  const list: Application[] = JSON.parse(fileContent);
  // Sort by createdAt desc
  return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function updateApplicationStatus(id: string, status: Application["status"]): Promise<boolean> {
  if (isFirebaseConfigured && db) {
    try {
      const q = collection(db, "internship_applications");
      const snapshot = await getDocs(q);
      let docRefId = "";
      snapshot.forEach((document) => {
        const data = document.data() as Application;
        if (data.id === id) {
          docRefId = document.id;
        }
      });
      if (docRefId) {
        const appDoc = doc(db, "internship_applications", docRefId);
        await updateDoc(appDoc, { status });
        return true;
      }
    } catch (e) {
      console.warn("Failed to update Firebase Firestore, falling back to local storage:", e);
    }
  }

  // Fallback to local storage JSON
  ensureLocalDbExists();
  const fileContent = fs.readFileSync(LOCAL_DB_PATH, "utf-8");
  const applications: Application[] = JSON.parse(fileContent);
  const index = applications.findIndex((app) => app.id === id);
  if (index !== -1) {
    applications[index].status = status;
    fs.writeFileSync(LOCAL_DB_PATH, JSON.stringify(applications, null, 2));
    return true;
  }
  return false;
}
