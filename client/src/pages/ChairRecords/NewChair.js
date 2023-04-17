import { useState, useEffect, useRef } from "react";
import Sidenav from "../../components/Sidenav";
import Login from "../Login";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import ChairNumberBtn from "../../components/ChairNumberBtn";
import Testing from "../Testing";

export default function NewChair() {
  const buttonContainerRef = useRef(null);
  
  useEffect(() => {
    // Get the longest button width
    let maxWidth = 0;
    const buttons = buttonContainerRef.current.querySelectorAll('.techName');
    buttons.forEach(button => {
      maxWidth = Math.max(maxWidth, button.offsetWidth);
    });

    // Set the minimum width of all buttons to the longest button width
    buttons.forEach(button => {
      button.style.minWidth = `${maxWidth}px`;
    });
  }, []);

  // let [input, setInput] = useState("");
  const [datetime, setDatetime] = useState(
    new Date()
      .toLocaleString([], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(",", "")
  );
  console.log(datetime);
  const subtractHours = (date, hours) => {
    return new Date(date.getTime() - hours * 60 * 60 * 1000);
  };

  const handleDatetimeChange = (e) => {
    setDatetime(e.target.value);
  };

  const datetimeMinus4Hours = subtractHours(new Date(datetime), 5);

  const formattedDatetime = datetimeMinus4Hours.toISOString().substr(0, 16);

  let [input, setInput] = useState("");
  const handleNumberClick = (num) => {
    setInput((prevInput) => prevInput + num);
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleSubmitClick = () => {
    // handle submitting chair selection
  };

  const handleEndOfDayClick = () => {
    // handle end of day
  };

  const handleBiWeeklyClick = () => {
    // handle bi-weekly cleaning
  };

  let user = true;
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
        <Sidenav />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid px-4">
              <h1 class="mt-4">Add Chair Record</h1>
              {/* <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
              </ol> */}
              {/* Tech */}
              <div class="row d-flex">
                <div class="col-xl-8 d-flex flex-fill">
                  <div class="card mb-4 flex-fill shadow">
                    <div class="card-header shadow">
                      <i class="fas fa-chart-area me-1"></i>
                      Tech Selection
                    </div>
                    <div ref={buttonContainerRef} class="d-flex flex-wrap text-center justify-content-around">
                      
                    <button type="button" class="btn btn-outline-primary techName">John</button>
                    <button type="button" class="btn btn-outline-primary techName">Mike</button>
                    <button type="button" class="btn btn-outline-primary techName">Test 1</button>
                    <button type="button" class="btn btn-outline-primary techName">Jennifer</button>
                    <button type="button" class="btn btn-outline-primary techName">Rhianna</button>
                    <button type="button" class="btn btn-outline-primary techName">Michael</button>
                    <button type="button" class="btn btn-outline-primary techName">Test 2</button>
                    <button type="button" class="btn btn-outline-primary techName">Short</button>
                    <button type="button" class="btn btn-outline-primary techName">Primary</button>
                    <button type="button" class="btn btn-outline-primary techName">Primary</button>
                    <button type="button" class="btn btn-outline-primary techName">Primary</button>
                    <button type="button" class="btn btn-outline-primary techName">test</button>
                    
                      
                      
                    </div>
                  </div>
                </div>
                {/* Chair */}
                <div class="col-xl-4 d-flex flex-column">
                  <div class="card mb-4 shadow">
                    <div class="card-header shadow">
                      <i class="fas fa-chart-bar me-1"></i>
                      Chair Selection
                    </div>
                    <div className="card-body">
                      {/* Chair Selection */}
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="chairFloatingInput"
                          placeholder="chair"
                          value={input}
                        />
                        <label htmlFor="chairFloatingInput">
                          Enter Chair Number
                        </label>
                      </div>
                      <div className="row">
                        <ChairNumberBtn
                          number={"7"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"8"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"9"}
                          handleNumberClick={handleNumberClick}
                        />
                      </div>
                      <div className="row">
                        <ChairNumberBtn
                          number={"4"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"5"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"6"}
                          handleNumberClick={handleNumberClick}
                        />
                      </div>
                      <div className="row">
                        <ChairNumberBtn
                          number={"1"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"2"}
                          handleNumberClick={handleNumberClick}
                        />
                        <ChairNumberBtn
                          number={"3"}
                          handleNumberClick={handleNumberClick}
                        />
                      </div>
                      <div className="row">
                        <button
                          type="button"
                          onClick={handleClearClick}
                          className="btn btn-outline-primary chairBtn col fs-5"
                        >
                          Clear
                        </button>
                        <ChairNumberBtn
                          number={"0"}
                          handleNumberClick={handleNumberClick}
                        />
                        <button
                          type="button"
                          onClick={handleSubmitClick}
                          className="btn btn-outline-danger chairBtn col fs-5"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="row">
                        <button
                          type="button"
                          onClick={handleEndOfDayClick}
                          className="btn btn-outline-primary chairBtn col fs-5"
                        >
                          End Of Day
                        </button>

                        <button
                          type="button"
                          onClick={handleBiWeeklyClick}
                          className="btn btn-outline-danger chairBtn col fs-5"
                        >
                          Bi-Weekly
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Detail */}
                  <div class="card mb-4 shadow flex-fill">
                    <div class="card-header shadow">
                      <i class="fas fa-table me-1"></i>
                      Cleaned & Disinfected
                    </div>
                    <div class="card-body">
                      <div className="row d-flex ">
                        <div className="form-floating mb-3 col-12 text-center">
                          <input
                            className="rounded form-control fs-6"
                            type="datetime-local"
                            value={formattedDatetime.replace(" ", "T")}
                            onChange={handleDatetimeChange}
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
                            <label
                              className="form-check-label"
                              for="chairNotUsed"
                            >
                              Chair Not Used
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
