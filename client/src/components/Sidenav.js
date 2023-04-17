import New from "../pages/ChairRecords/NewChair";
import { Link } from "react-router-dom";

export default function Sidenav(props) {
  return (
    <>
      <nav
        class="sb-sidenav accordion sb-sidenav-light shadow"
        id="sidenavAccordion"
      >
        <div class="sb-sidenav-menu ">
          <div class="nav">
            <div class="sb-sidenav-menu-heading">Interface</div>
            {/* Chair Dropdown Menu */}
            <div class="dropdown-center">
              <button
                class="btn dropdown-toggle bg-light text-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-chair mx-3 opacity-50"></i>
                Chair Records
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="noLine text-black mx-3" to="/addChairRecord">
                    Add Chair Record
                  </Link>
                </li>
                <li>
                  <Link
                    className="noLine text-black mx-3"
                    to="/showChairRecords"
                  >
                    Show Chair Records
                  </Link>
                </li>
              </ul>
            </div>
            {/* Employee Dropdown Menu */}
            <div class="dropdown-center">
              <button
                class="btn dropdown-toggle bg-light text-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-regular fa-user mx-3 opacity-50"></i>
                Employees
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/addEmployee">
                    <div>Add Employee</div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/showEmployee">
                    <div>Show Employee</div>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contractorList">
                    <div>Contractor List</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div class="sb-sidenav-menu-heading">Forms</div>
            {/* TDLR Forms */}
            <div class="dropdown-center">
              <button
                class="btn dropdown-toggle bg-light text-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-list-ul mx-3 opacity-50"></i>
                TDLR Forms
              </button>
              <ul class="dropdown-menu">
              <div class="sb-sidenav-menu-heading">WHIRLPOOL FOOT SPA INSTRUCTIONS & FORMS</div>
              <button class="nav-link border-0 bg-light mx-3" onClick={()=>{window.open("https://www.tdlr.texas.gov/barbering-and-cosmetology/pdf/Whirlpool-Foot-Spa-Cleaning-Record-BAC-FI-004-E.pdf", "_blank")}}>
              <div class="sb-nav-link-icon">
                {/* <i class="fas fa-chart-area"></i> */}
                <i class="fa-solid fa-list-ul"></i>
              </div>
              English
            </button>
            <button class="nav-link border-0 bg-light mx-3" onClick={()=>{window.open("https://www.tdlr.texas.gov/barbering-and-cosmetology/pdf/Whirlpool-Foot-Spa-Cleaning-Record-BAC-FI-004-S.pdf", "_blank")}}>
              <div class="sb-nav-link-icon">
                {/* <i class="fas fa-chart-area"></i> */}
                <i class="fa-solid fa-list-ul"></i>
              </div>
              Spanish
            </button>
            <button class="nav-link border-0 bg-light mx-3" onClick={()=>{window.open("https://www.tdlr.texas.gov/barbering-and-cosmetology/pdf/Whirlpool-Foot-Spa-Cleaning-Record-BAC-FI-004-V.pdf", "_blank")}}>
              <div class="sb-nav-link-icon">
                {/* <i class="fas fa-chart-area"></i> */}
                <i class="fa-solid fa-list-ul"></i>
              </div>
              Vietnamese
            </button>
              </ul>
            </div>
          </div>
        </div>
        <div class="sb-sidenav-footer">
          <div class="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </>
  );
}
