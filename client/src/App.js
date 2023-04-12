import "./index.css";
import "../src/css/styles.css"
import { useState } from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import Login from "./pages/Login";

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
          path="/login"
          element={<Login/>}
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