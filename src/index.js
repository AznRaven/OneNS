import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap Your <App /> inside <Router> tags */}
    <Router>
      <Nav />
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>
);