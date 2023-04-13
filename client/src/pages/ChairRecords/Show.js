import { Link } from "react-router-dom";

export default function Show() {
  return (
    <>
      {/* <h1>Show Chair Record</h1> */}
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            class="sb-sidenav accordion sb-sidenav-light"
            id="sidenavAccordion"
          >
            <div class="sb-sidenav-menu shadow">
              <div class="nav d-flex align-items-center">
                {/* Chair Link */}
                <div class="sb-sidenav-menu-heading">Records</div>
                <div class="dropdown-center">
                  <a
                    class="btn btn-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="sb-nav-link-icon opacity-50">
                      <i class="fa-solid fa-chair"></i>
                    </div>
                    Chair Records
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <Link className="noLine" to={"/newRecords"}>
                        <div className="text-black mx-3">Add Record</div>
                      </Link>
                      {/* <a class="dropdown-item" href="#">
                        Add Record
                      </a> */}
                    </li>
                    <li>
                      <Link className="noLine" to={"/showRecords"}>
                        <div className="text-black mx-3">Show Record</div>
                      </Link>
                      {/* <a class="dropdown-item" href="#">
                        Show Record
                      </a> */}
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Print
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Employee Link */}

                <div class="dropdown-center">
                  <a
                    class="btn btn-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="sb-nav-link-icon opacity-50">
                      <i class="fa-regular fa-user"></i>
                    </div>
                    Employees
                  </a>

                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Add Employee
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Show Employee
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Contractor List
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="sb-sidenav-menu-heading">Addons</div>
                <a class="nav-link" href="charts.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-chart-area"></i>
                  </div>
                  Charts
                </a>
                <a class="nav-link" href="tables.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-table"></i>
                  </div>
                  Tables
                </a>
              </div>
            </div>
            {/* <div class="sb-sidenav-footer">
              <div class="small">Logged in as:</div>
              Start Bootstrap
            </div> */}
          </nav>
        </div>
        <div id="layoutSidenav_content">stuff</div>
      </div>
    </>
  );
}
