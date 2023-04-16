import { useState } from "react";
import Footer from "../../components/Footer";
import Login from "../Login";
import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

export default function NewChair(user) {
  // let [input, setInput] = useState("");
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">Add Chair Records</div>
      </div>
    </>
  );
}
