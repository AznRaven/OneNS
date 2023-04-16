import Sidenav from "../../components/Sidenav";
import { Link } from "react-router-dom";

export default function ContractorList() {

    return(
    <>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">Contractor List</div>
      </div>
    </>
    )
}