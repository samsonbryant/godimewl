import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { MongoDBProvider } from './useContext.jsx';

createRoot(document.getElementById("root")).render(
  <MongoDBProvider>
    <App />
  </MongoDBProvider>
);
