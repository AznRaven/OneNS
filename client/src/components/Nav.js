import { Link } from "react-router-dom";
import New from "../pages/ChairRecords/NewChair";
import Login from "../pages/Login";
import Footer from "./Footer";
import Sidenav from "./Sidenav";

export default function Nav() {
  // const sidebarToggle = document.body.querySelector('#sidebarToggle');

  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-light bg-light shadow">
        {/* <!-- Navbar Brand--> */}
        <Link className="noLine text-black" to={"/"}>
          <div>1NailSystem</div>
        </Link>
        {/* <a class="navbar-brand ps-3" href="index.html">
          1NailSystem
        </a> */}
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
                <a className="dropdown-item" href="#!">
                  Logout
                </a>
              </li>

              <li>
                <Link
                  className="text-dark"
                  to={"/login"}
                  style={{ textDecoration: "none" }}
                >
                  <div className="mx-3">Login</div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* {user ? <Sidenav/> : <Login/>} */}
    </>
  );
}
