import ClassComponent from "./ClassComponent";
import Navbar from "./navbar";
import Aboutus from "./test/Aboutus";
import ApiCall from "./test/ApiCall.js";
import Counter from "./test/Counter";
import Home from "./test/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ClassComponent />}>
            ClassComponent
          </Route>
          <Route path="/apicall" element={<ApiCall />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
