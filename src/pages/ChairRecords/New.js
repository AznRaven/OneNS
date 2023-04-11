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
          <div className="row">
            {/* Technician */}
            <div className="col-xl-8">
              <div className="card mb-4 shadow">
                <div className="card-header">
                  <i className="fas fa-user me-1"></i>
                  Technician
                </div>
                <div className="card-body" style={{ height: "57vh" }}></div>
              </div>
            </div>
            {/* Chair */}
            <div className="col-xl-4">
              <div className="card mb-2 shadow">
                <div className="card-header">
                  <i className="fas fa-calculator me-1"></i>
                  Chair
                </div>
                <div className="card-body"
                style={{ height: "30vh" }}></div>
              </div>
              <div className="card mb-4 shadow">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1"></i>
                  Details
                </div>
                <div className="card-body"
                style={{ height: "20vh" }}></div>
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
