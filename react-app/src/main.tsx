import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Load full Bootstrap CSS so utility and component classes (e.g. "list-group") work.
// Previously only the grid stylesheet was imported which explains missing styles.
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
