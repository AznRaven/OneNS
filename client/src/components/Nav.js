import New from "../pages/ChairRecords/New";
import Footer from "./Footer";

export default function Nav() {
  const sb = () => {
    const sidebarToggle = document.body.querySelector("#sidebarToggle");
    if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      //     document.body.classList.toggle('sb-sidenav-toggled');
      // }
      sidebarToggle.addEventListener("click", (event) => {
        event.preventDefault();
        document.body.classList.toggle("sb-sidenav-toggled");
        localStorage.setItem(
          "sb|sidebar-toggle",
          document.body.classList.contains("sb-sidenav-toggled")
        );
      });
    }
  };

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
          onClick={sb}
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
              class="nav-link dropdown-toggle"
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
              <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <a class="nav-link" href="index.html">
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </a>
                <div class="sb-sidenav-menu-heading">Interface</div>
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  Layouts
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapseLayouts"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a class="nav-link" href="layout-static.html">
                      Static Navigation
                    </a>
                    <a class="nav-link" href="layout-sidenav-light.html">
                      Light Sidenav
                    </a>
                  </nav>
                </div>
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePages"
                  aria-expanded="false"
                  aria-controls="collapsePages"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-book-open"></i>
                  </div>
                  Pages
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  id="collapsePages"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav
                    class="sb-sidenav-menu-nested nav accordion"
                    id="sidenavAccordionPages"
                  >
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseAuth"
                      aria-expanded="false"
                      aria-controls="pagesCollapseAuth"
                    >
                      Authentication
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      class="collapse"
                      id="pagesCollapseAuth"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="login.html">
                          Login
                        </a>
                        <a class="nav-link" href="register.html">
                          Register
                        </a>
                        <a class="nav-link" href="password.html">
                          Forgot Password
                        </a>
                      </nav>
                    </div>
                    <a
                      class="nav-link collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#pagesCollapseError"
                      aria-expanded="false"
                      aria-controls="pagesCollapseError"
                    >
                      Error
                      <div class="sb-sidenav-collapse-arrow">
                        <i class="fas fa-angle-down"></i>
                      </div>
                    </a>
                    <div
                      class="collapse"
                      id="pagesCollapseError"
                      aria-labelledby="headingOne"
                      data-bs-parent="#sidenavAccordionPages"
                    >
                      <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="401.html">
                          401 Page
                        </a>
                        <a class="nav-link" href="404.html">
                          404 Page
                        </a>
                        <a class="nav-link" href="500.html">
                          500 Page
                        </a>
                      </nav>
                    </div>
                  </nav>
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
          <New/>
          
        </div>
      </div>
        
    </>
  );
}
