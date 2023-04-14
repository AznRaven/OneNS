import "./index.css";
import "../src/css/styles.css"
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Show from "./pages/ChairRecords/Show";
import NewEmp from "./pages/Employee/NewEmp";
import ShowEmp from "./pages/Employee/ShowEmp";
import ContractorList from "./pages/Employee/ContractorList";

export default function App() {


  return (
    <div>
      {/* <HomePage employees={employees} addEmployee={addEmployee} /> */}
      <Routes> 
        <Route 
          path="/"
          element={<Home/>}
        />
        <Route 
          path="/newRecords"
          element={<Home/>}
        />
        <Route 
          path="/showRecords"
          element={<Show/>}
        />
        <Route 
          path="/addEmployee"
          element={<NewEmp/>}
        />
        <Route 
          path="/showEmployee"
          element={<ShowEmp/>}
        />
        <Route 
          path="/contractorList"
          element={<ContractorList/>}
        />
        <Route 
          path="/login"
          element={<Login/>}
        />
        <Route 
          path="/register"
          element={<Register/>}
        />
        {/* <Route
          path="/EmployeePage/:emp"
          element={<EmployeePage employees={employees} />}
        /> */}
        {/* <Route path='/price/:symbol' element={<Price/>} /> */}
        {/* <Route path='*' element={<Navagate to='/' />} /> */}
      </Routes>
    </div>
  );
}