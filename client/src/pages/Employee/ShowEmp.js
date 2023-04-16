import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

export default function ShowEmp() {

    return(
    <>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">Show Employee</div>
      </div>
    </>
    )
}