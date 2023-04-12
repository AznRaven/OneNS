import New from "../pages/ChairRecords/New";
import Footer from "./Footer";

export default function Nav() {
  // const sidebarToggle = document.body.querySelector('#sidebarToggle');

  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-light bg-light shadow">
        {/* <!-- Navbar Brand--> */}
        <a class="navbar-brand ps-3" href="index.html">
          1NailSystem
        </a>
        {/* <!-- Sidebar Toggle--> */}
        <button
          class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
          onClick={() => {
            document.body.classList.toggle("sb-sidenav-toggled");
          }}
        >
          <i class="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div class="input-group">
            <input
              class="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggled"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user fa-fw"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a class="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#!">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
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
                      <a class="dropdown-item" href="#">
                        Add Record
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Show Record
                      </a>
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
        <div id="layoutSidenav_content">
          <New />
        </div>
      </div>
    </>
  );
}
