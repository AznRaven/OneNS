export default function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <>
      {/* <footer class="py-4 bg-light mt-auto fixed-bottom">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-around small">
            <div class="text-muted">Copyright &copy; 1NailSystem {currentYear}</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer> */}
      <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; 1NailSystem {currentYear}</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
    </>
  );
}
