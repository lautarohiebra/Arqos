import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./scrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>
);
