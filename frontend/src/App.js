import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JobList from "./components/JobList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";

function App(){
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href="/";
  };

  return (
    <BrowserRouter>
      <nav style={{padding:10}}>
        <Link to="/">Home</Link> | 
        {!token && <Link to="/login">Login</Link>} | 
        {!token && <Link to="/signup">Signup</Link>} | 
        <Link to="/admin">Admin</Link>
        {token && <button onClick={logout} style={{marginLeft:10}}>Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;   // 👈 ye line sabse important hai
