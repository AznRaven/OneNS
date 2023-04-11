import Footer from "../../components/Footer";

export default function New() {
  return (
    <>
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4">Select Technician and Chair</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Add New Record</li>
          </ol>
          <br />
          <div className="row techChair">
            {/* Technician */}
            <div className="col-xl-8 d-flex">
              <div className="card shadow flex-fill">
                <div className="card-header">
                  <i className="fas fa-user me-1"></i>
                  Technician
                </div>
                <div className="card-body techBody flex-fill"></div>
              </div>
            </div>
            {/* Chair */}
            <div className="col-xl-4 d-flex flex-column">
              <div className="card mb-2 shadow">
                <div className="card-header">
                  <i className="fas fa-calculator me-1"></i>
                  Chair
                </div>
                <div className="card-body">
                  <div class="row">
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      7
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      8
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      9
                    </button>
                  </div>
                  <div class="row">
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      4
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      5
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      6
                    </button>
                  </div>
                  <div class="row">
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      1
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      2
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      3
                    </button>
                  </div>
                  <div class="row">
                    <button type="button" class="btn btn-outline-primary chairBtn col">
                      Clear
                    </button>
                    <button type="button" class="btn btn-outline-secondary chairBtn col">
                      0
                    </button>
                    <button type="button" class="btn btn-outline-danger chairBtn col">
                      Submit
                    </button>
                  </div>
                </div>
              </div>


              <div className="card shadow flex-fill">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1"></i>
                  Details
                </div>
                <div className="card-body"></div>
              </div>
              
            </div>
            {/* Details */}
            <div className="col-xl-4"></div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
