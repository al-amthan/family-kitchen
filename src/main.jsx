import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Aapp.jsx";
import { FamilyProvider } from "./context/Familycontext.jsx";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FamilyProvider>
      <App />
    </FamilyProvider>
  </React.StrictMode>
);