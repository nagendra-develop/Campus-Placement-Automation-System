import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";   // 👈 App.js ka default export import ho raha hai
import "./index.css";      // optional: agar css file ho

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

