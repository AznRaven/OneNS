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
              class="showChairTable table bg-light"
              style={{ width: "90%" }}
            >
              <thead>
                <tr>
                  <th className="border-light text-center" colspan="12" >TEXAS DEPARTMENT OF LICENSING & REGULATIONS </th>
                </tr>
                <tr>
                  <td className="border-light text-center" colspan="12">P.O. Box 12157 Austin, Texas 78711-2157 Fax(512) 583-7148</td>
                </tr>
                <tr>
                  <td className="border-light text-center" colspan="12">inspectionrequest@tdlr.texas.gov www.tdlr.texas.gov</td>
                </tr>
                <tr>
                  <td className="border-light text-center" colspan="12">BARBERING & COSMETOLOGY PROGRAM</td>
                </tr>
                <tr>
                  <td className="border-light text-center bg-black text-white" colspan="12">WHIRLPOOL FOOT SPA CLEANING AND DISINFECTION RECORD (TAC 83.108)</td>
                </tr>
                <tr>
                  <td className="border" colspan="2">Name:</td>
                  <td className="border" colspan="1"></td>
                  <td className="border" colspan="3">License Number:</td>
                  <td className="border" colspan="6"></td>
                </tr>
                <tr>
                  <td className="border" colspan="2">Address:</td>
                  <td className="border" colspan="1"></td>
                  <td className="border" colspan="3">Basin/Tub Number:</td>
                  <td className="border" colspan="6"></td>                
                </tr>
                <tr>
                  <td colspan="3"></td>
                  <td colspan="3"></td>
                  <td colspan="3"></td>
                  <td colspan="3"></td>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                    <th className="border" colspan="2">When</th>
                    <th className="border" colspan="1">Who</th>
                    <th className="border" colspan="9">CLEANED and DISINFECTED<br/><div className="">Place X in Correct Box or Boxes</div></th>
                </tr>
                
                <tr style={{fontSize: "1.9vh"}}>
                    <th className="border" style={{width: "10%"}} class="name">Date<br/>MM/DD/YYYY</th>
                    <th className="border" style={{width: "10%"}}>Time<br/>A.M. or P.M.</th>
                    <th className="border" style={{width: "33%"}}>Full Name</th>
                    <th className="border" style={{width: "5%"}}>Chair Number</th>
                    <th className="border" style={{width: "5%"}}>Not used</th>
                    <th className="border" style={{width: "10%"}}>Liner used and disposed</th>
                    <th className="border" style={{width: "10%"}}>Portable Jet Used and Cleaned</th>
                    <th className="border" style={{width: "10%"}}>After Client</th>
                    <th className="border" style={{width: "10%"}}>End of Day</th>
                    <th className="border" style={{width: "10%"}}>Bi-Weekly</th>
                    <th className="border" style={{width: "10%"}} class="noprint" colspan="2">Edit</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
