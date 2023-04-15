import { useState } from "react";

export default function Testing() {
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

  const datetimeMinus4Hours = subtractHours(new Date(datetime), 4);

  const formattedDatetime = datetimeMinus4Hours.toISOString().substr(0, 16);

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          Cleaned & Disinfected
        </div>
        <div className="card-body">
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
        </div>
      </div>
    </>
  );
}
