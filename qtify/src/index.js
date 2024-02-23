import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GenreProvider from "./context/GenreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GenreProvider>
      <App />
    </GenreProvider>
  </React.StrictMode>
);
