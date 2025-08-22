import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard(){
  const [stats, setStats] = useState(null);
  const [apps, setApps] = useState([]);

  useEffect(()=>{
    API.get("/admin/stats").then(r=>setStats(r.data)).catch(console.error);
    API.get("/applications").then(r=>setApps(r.data)).catch(console.error);
  }, []);

  const updateStatus = async (id, status) => {
    await API.patch(`/applications/${id}/status`, { status });
    setApps(apps.map(a => a.id === id ? {...a, status} : a));
  };

  if (!stats) return <div>Loading dashboard...</div>;
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <div>Total Jobs: {stats.total_jobs}</div>
        <div>Total Users: {stats.total_users}</div>
        <div>Total Applications: {stats.total_applications}</div>
        <div>Pending: {stats.pending}</div>
      </div>

      <h3>Applications</h3>
      {apps.map(a => (
        <div key={a.id} style={{border:"1px solid #ccc", margin:6, padding:6}}>
          <div>{a.student_name} applied for {a.job_title} — {a.status}</div>
          <button onClick={()=>updateStatus(a.id, "shortlisted")}>Shortlist</button>
          <button onClick={()=>updateStatus(a.id, "rejected")}>Reject</button>
        </div>
      ))}
    </div>
  );
}
