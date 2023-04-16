import { Link } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

export default function ShowChair() {
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidenav />
        </div>
        <div id="layoutSidenav_content">
          <div className="bg-secondary showChairBg d-flex justify-content-center align-items-center">
            <table
              class="showChairTable table bg-light text-center"
              style={{ width: "90%" }}
            >
              <thead className="table-borderless">
                <tr>
                  <th colspan="12" scope="col" >TEXAS DEPARTMENT OF LICENSING & REGULATIONS </th>
                </tr>
                <tr>
                  <td colspan="12">TEXAS DEPARTMENT OF LICENSING & REGULATIONS</td>
                </tr>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
