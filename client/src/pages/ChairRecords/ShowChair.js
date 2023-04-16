import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

export default function ShowChair() {
  return (
    <>
      {/* <h1>Show Chair Record</h1> */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">Show Chair Records</div>
      </div>
    </>
  );
}
