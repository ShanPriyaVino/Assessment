import Navbar from "./navbar";
import Home from "./test/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from "./test/EmployeeList";
import EmployeeOverview from "./test/EmployeeOverview";
import Notfound from "./test/Notfound";
import EmployeeDetails from "./test/EmployeeDetails";
import EmployeeResume from "./test/EmployeeResume";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employeeoverview" element={<EmployeeOverview />} />
          <Route path="/employeeDetail" element={<EmployeeDetails />} />
          <Route path="/employeeResume" element={<EmployeeResume />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
