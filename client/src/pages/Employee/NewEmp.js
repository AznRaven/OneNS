import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

export default function NewEmp() {

    return(
    <>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">Add Employee</div>
      </div>
    </>
    )
}