import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SidebarProvider } from "./context/Sidebar-context";
import { DarkModeProvider } from "./context/DarkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </DarkModeProvider>
);
