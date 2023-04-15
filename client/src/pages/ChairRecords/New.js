import { useState } from "react";
import Footer from "../../components/Footer";
import Login from "../Login";

export default function New(user) {
  // let [input, setInput] = useState("");
  return (
    <>
      <main>
        <div className="container-fluid px-4 techChairCard">
          <h1 className="mt-4">Select Technician and Chair</h1>
          {/* <ol className="breadcrumb mb-4">
              <li className="breadcrumb-item active">Add New Record</li>
            </ol> */}
          <div className="row techChair">
            {/* Technician */}
            <div className="col-xl-8 d-flex flex-column techCard techChairCard ">
              <div className="card shadow flex-fill">
                <div className="card-header">
                  <i className="fas fa-user me-1"></i>
                  Technician
                </div>
                <div className="card-body techBody flex-fill">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="techFloatingInput"
                      placeholder="tech"
                    />
                    <label htmlFor="techFloatingInput">Select Technician</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Chair */}
            <div className="col-xl-4 d-flex flex-column ">
              <div className="card mb-2 shadow">
                <div className="card-header">
                  <i className="fas fa-calculator me-1"></i>
                  Chair
                </div>
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="chairFloatingInput"
                      placeholder="chair"
                      // value={input}
                    />
                    <label htmlFor="chairFloatingInput">
                      Enter Chair Number
                    </label>
                  </div>
                  {/* Chair Number Pad */}
                  <div className="row">
                    <button
                      // onClick={setInput((prevInput) => prevInput + "7")}
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      7
                    </button>
                    <button
                      // onClick={setInput((prevInput) => prevInput + "8")}
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      8
                    </button>
                    <button
                      // onClick={setInput((prevInput) => prevInput + "9")}
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      9
                    </button>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      4
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      5
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      6
                    </button>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      3
                    </button>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-outline-primary chairBtn col"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary chairBtn col"
                    >
                      0
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger chairBtn col"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="btn btn-outline-primary chairBtn col"
                    >
                      End Of Day
                    </button>

                    <button
                      type="button"
                      className="btn btn-outline-danger chairBtn col"
                    >
                      Bi-Weekly
                    </button>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="card shadow flex-fill">
                <div className="card-header">
                  <i className="fas fa-chart-bar me-1"></i>
                  Details
                </div>
                <div className="card-body">
                  <div className="row d-flex ">
                    <div className="form-floating mb-3 col-12 text-center">
                      <input
                        className="rounded form-control fs-6"
                        type="datetime-local"
                      />
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="liner"
                          checked
                        />
                        <label className="form-check-label" for="liner">
                          Liner Used
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="client"
                          checked
                        />
                        <label className="form-check-label" for="client">
                          After Client
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="cleaned"
                          checked
                        />
                        <label className="form-check-label" for="cleaned">
                          Jet Used & Cleaned
                        </label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="biWeekly"
                        />
                        <label className="form-check-label" for="biWeekly">
                          BI-Weekly
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="eod"
                        />
                        <label className="form-check-label" for="eod">
                          End Of Day
                        </label>
                        <br />
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="chairNotUsed"
                        />
                        <label className="form-check-label" for="chairNotUsed">
                          Chair Not Used
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4"></div>
          </div>
        </div>
      </main>
    </>
  );
}
