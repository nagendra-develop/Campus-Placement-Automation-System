import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function JobList(){
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    API.get("/jobs").then(res=> setJobs(res.data)).catch(console.error).finally(()=>setLoading(false));
  }, []);

  const apply = async (jobId) => {
    try{
      await API.post("/applications/apply", { job_id: jobId });
      alert("Applied successfully");
    }catch(err){
      alert(err.response?.data?.error || "Apply failed");
    }
  };

  if (loading) return <div>Loading jobs...</div>;
  return (
    <div>
      {jobs.map(j => (
        <div key={j.id} style={{ border:"1px solid #ddd", margin:8, padding:8 }}>
          <h3>{j.title}</h3>
          <p>{j.description}</p>
          <button onClick={()=>apply(j.id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}
