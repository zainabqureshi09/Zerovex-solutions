"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Download,
  Lock,
  Loader2,
  RefreshCw,
  UserCheck,
  Clock,
  CheckCircle,
  XCircle,
  FileSpreadsheet,
  Layers,
  ArrowUpDown,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { Application } from "@/lib/db";

export default function AdminPage() {
  const [passkey, setPasskey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState<Application[]>([]);
  const [statusMsg, setStatusMsg] = useState("");
  
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [filterField, setFilterField] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  
  // UI States
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  useEffect(() => {
    // Check if password saved in session storage
    const storedPasskey = sessionStorage.getItem("zv_admin_passkey");
    if (storedPasskey) {
      verifyAndFetch(storedPasskey);
    }
  }, []);

  const verifyAndFetch = async (inputPasskey: string) => {
    setIsLoading(true);
    setAuthError("");
    try {
      const res = await fetch(`/api/internships/list?adminPasskey=${encodeURIComponent(inputPasskey)}`);
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Verification failed");
      }
      const data = await res.json();
      setApplications(data);
      sessionStorage.setItem("zv_admin_passkey", inputPasskey);
      setPasskey(inputPasskey);
      setIsAuthenticated(true);
    } catch (err: any) {
      setAuthError(err.message || "Invalid passkey. Access denied.");
      sessionStorage.removeItem("zv_admin_passkey");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkey.trim()) return;
    verifyAndFetch(passkey.trim());
  };

  const handleLogout = () => {
    sessionStorage.removeItem("zv_admin_passkey");
    setIsAuthenticated(false);
    setApplications([]);
    setPasskey("");
  };

  const handleStatusChange = async (id: string, newStatus: Application["status"]) => {
    setUpdatingStatusId(id);
    try {
      const res = await fetch("/api/internships/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,
          status: newStatus,
          adminPasskey: passkey
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");
      
      // Update state locally
      setApplications((prev) =>
        prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
      );
      
      showNotification(`Status updated to: ${newStatus}`);
    } catch (err: any) {
      alert(err.message || "Failed to update status");
    } finally {
      setUpdatingStatusId(null);
    }
  };

  const showNotification = (msg: string) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(""), 3000);
  };

  const handleRefresh = () => {
    if (passkey) verifyAndFetch(passkey);
  };

  // CSV Export
  const handleExportCSV = () => {
    if (filteredApplications.length === 0) {
      alert("No data available to export");
      return;
    }

    const headers = [
      "Application ID",
      "Full Name",
      "Email",
      "Phone",
      "WhatsApp",
      "City",
      "Education Level",
      "Selected Field",
      "Skills",
      "Portfolio/LinkedIn URL",
      "Why Internship",
      "Availability",
      "Status",
      "Applied At"
    ];

    const rows = filteredApplications.map((app) => [
      app.id,
      app.fullName,
      app.email,
      app.phone,
      app.whatsapp,
      app.city,
      app.educationLevel,
      app.selectedField,
      app.skills.replace(/"/g, '""'), // escape quotes
      app.portfolioUrl,
      app.whyInternship.replace(/"/g, '""'),
      app.availability.replace(/"/g, '""'),
      app.status,
      app.createdAt
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.map((val) => `"${val}"`).join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `internship_applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtering & Searching Logics
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.skills.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesField = filterField ? app.selectedField === filterField : true;
    const matchesStatus = filterStatus ? app.status === filterStatus : true;
    
    return matchesSearch && matchesField && matchesStatus;
  });

  // Calculate Metrics
  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "Pending").length,
    shortlisted: applications.filter((a) => a.status === "Shortlisted").length,
    interview: applications.filter((a) => a.status === "Interview Scheduled").length,
    accepted: applications.filter((a) => a.status === "Accepted").length,
    rejected: applications.filter((a) => a.status === "Rejected").length
  };

  const fieldsList = Array.from(new Set(applications.map((a) => a.selectedField)));

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black py-20 px-4">
        <GlassCard className="w-full max-w-md p-8 border border-white/10 text-center relative overflow-hidden">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Security Check</h1>
          <p className="text-sm text-gray-400 mb-6">Enter the administrator passkey to view the internship applications database.</p>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {authError && (
              <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-3 text-xs text-red-400 text-left">
                {authError}
              </div>
            )}
            <input
              type="password"
              placeholder="Enter Admin Passkey"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
              required
            />
            <MagneticButton>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-3 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                  </>
                ) : (
                  "Unlock Dashboard"
                )}
              </button>
            </MagneticButton>
          </form>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-white pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
              Internship <span className="text-gradient">Manager</span>
            </h1>
            <p className="text-sm text-gray-400 mt-1">Review, process, and export portal internship applications.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRefresh}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-4 text-xs font-bold text-white transition-all cursor-pointer"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${isLoading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              onClick={handleExportCSV}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" /> Export CSV
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-white/10 hover:bg-white/10 px-4 text-xs font-bold text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dynamic Status Notification */}
        {statusMsg && (
          <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-green-500 border border-green-600 px-5 py-3 text-xs font-bold text-white shadow-2xl animate-fade-in">
            {statusMsg}
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 mb-8">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Total Applied</div>
            <div className="text-3xl font-extrabold text-white">{stats.total}</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-yellow-500" /> Pending
            </div>
            <div className="text-3xl font-extrabold text-yellow-500">{stats.pending}</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <UserCheck className="h-3.5 w-3.5 text-blue-400" /> Shortlisted
            </div>
            <div className="text-3xl font-extrabold text-blue-400">{stats.shortlisted}</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-purple-400" /> Interviewed
            </div>
            <div className="text-3xl font-extrabold text-purple-400">{stats.interview}</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" /> Accepted
            </div>
            <div className="text-3xl font-extrabold text-green-500">{stats.accepted}</div>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-5">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <XCircle className="h-3.5 w-3.5 text-red-500" /> Rejected
            </div>
            <div className="text-3xl font-extrabold text-red-500">{stats.rejected}</div>
          </div>
        </div>

        {/* Filter Controls */}
        <GlassCard className="p-6 border border-white/10 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by candidate name, ID, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex gap-4">
            {/* Field Filter */}
            <select
              value={filterField}
              onChange={(e) => setFilterField(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white focus:outline-none"
            >
              <option value="" className="bg-black text-gray-400">All Fields</option>
              {fieldsList.map((f) => (
                <option key={f} value={f} className="bg-black text-white">{f}</option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white focus:outline-none"
            >
              <option value="" className="bg-black text-gray-400">All Statuses</option>
              <option value="Pending" className="bg-black text-yellow-500">Pending</option>
              <option value="Shortlisted" className="bg-black text-blue-400">Shortlisted</option>
              <option value="Interview Scheduled" className="bg-black text-purple-400">Interview Scheduled</option>
              <option value="Accepted" className="bg-black text-green-500">Accepted</option>
              <option value="Rejected" className="bg-black text-red-500">Rejected</option>
            </select>
          </div>
        </GlassCard>

        {/* Database List Table */}
        <GlassCard className="border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  <th className="py-4 px-6">ID</th>
                  <th className="py-4 px-6">Candidate Name</th>
                  <th className="py-4 px-6">Internship Field</th>
                  <th className="py-4 px-6 text-center">Applied Date</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-gray-500 text-sm">
                      No matching internship applications found.
                    </td>
                  </tr>
                ) : (
                  filteredApplications.map((app) => {
                    const isExpanded = expandedId === app.id;
                    const dateFormatted = new Date(app.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    });

                    // Badge colors
                    let statusColor = "bg-yellow-500/10 text-yellow-500 border-yellow-500/30";
                    if (app.status === "Shortlisted") statusColor = "bg-blue-500/10 text-blue-400 border-blue-500/30";
                    if (app.status === "Interview Scheduled") statusColor = "bg-purple-500/10 text-purple-400 border-purple-500/30";
                    if (app.status === "Accepted") statusColor = "bg-green-500/10 text-green-500 border-green-500/30";
                    if (app.status === "Rejected") statusColor = "bg-red-500/10 text-red-500 border-red-500/30";

                    return (
                      <>
                        <tr
                          key={app.id}
                          className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                            isExpanded ? "bg-white/5" : ""
                          }`}
                          onClick={() => setExpandedId(isExpanded ? null : app.id)}
                        >
                          <td className="py-4 px-6 font-mono text-xs font-bold text-red-500">
                            {app.id}
                          </td>
                          <td className="py-4 px-6 text-sm font-semibold text-white">
                            {app.fullName}
                          </td>
                          <td className="py-4 px-6 text-xs text-gray-300">
                            {app.selectedField}
                          </td>
                          <td className="py-4 px-6 text-center text-xs text-gray-400">
                            {dateFormatted}
                          </td>
                          <td className="py-4 px-6 text-center" onClick={(e) => e.stopPropagation()}>
                            <span className={`inline-block border rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${statusColor}`}>
                              {app.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-end gap-3">
                              {/* Status select dropdown */}
                              <select
                                value={app.status}
                                disabled={updatingStatusId === app.id}
                                onChange={(e) => handleStatusChange(app.id, e.target.value as Application["status"])}
                                className="rounded-lg border border-white/10 bg-black px-2 py-1.5 text-[10px] font-bold text-white focus:outline-none"
                              >
                                <option value="Pending">Pending</option>
                                <option value="Shortlisted">Shortlisted</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Accepted">Accepted</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                              <button
                                onClick={() => setExpandedId(isExpanded ? null : app.id)}
                                className="text-gray-400 hover:text-white p-1"
                              >
                                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </button>
                            </div>
                          </td>
                        </tr>

                        {/* Expanded Candidate Profile Card Row */}
                        {isExpanded && (
                          <tr className="bg-white/5 border-b border-white/5">
                            <td colSpan={6} className="p-8">
                              <div className="grid gap-8 md:grid-cols-3">
                                {/* Basic Contact details */}
                                <div className="space-y-4">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Candidate Details</h4>
                                  <div className="space-y-2 text-xs">
                                    <div>
                                      <span className="text-gray-500">Email:</span>{" "}
                                      <a href={`mailto:${app.email}`} className="text-white hover:underline">
                                        {app.email}
                                      </a>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Phone:</span>{" "}
                                      <span className="text-white">{app.phone}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">WhatsApp:</span>{" "}
                                      <span className="text-white">{app.whatsapp}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Location (City):</span>{" "}
                                      <span className="text-white">{app.city}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Education:</span>{" "}
                                      <span className="text-white">{app.educationLevel}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500">Portfolio/LinkedIn:</span>{" "}
                                      <a
                                        href={app.portfolioUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-400 hover:underline inline-flex items-center gap-1"
                                      >
                                        Visit link <ExternalLink className="h-3 w-3" />
                                      </a>
                                    </div>
                                  </div>
                                </div>

                                {/* Skills */}
                                <div>
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Skills & Availability</h4>
                                  <div className="space-y-4">
                                    <div>
                                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1.5">Skills listed</span>
                                      <div className="flex flex-wrap gap-1.5">
                                        {app.skills.split(",").map((s) => (
                                          <span key={s} className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-[10px] text-gray-300">
                                            {s.trim()}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Availability</span>
                                      <span className="text-xs text-white">{app.availability}</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Statement of Intent */}
                                <div>
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Cover Letter Statement</h4>
                                  <p className="text-xs leading-relaxed text-gray-300 bg-black/30 border border-white/5 p-4 rounded-xl max-h-[180px] overflow-y-auto">
                                    {app.whyInternship}
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
