import "./App.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login.jsx";
import AddVehical from "./pages/AddVehical.jsx";
import CurrentVehical from "./pages/CurrentVehical.jsx";
import VehicalDetail from "./pages/VehicalDetail.jsx";

// All Reports
import TestReport from "./reports/TestReport.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/addvehical" element={<AddVehical />} />
      <Route path="/vehical" element={<CurrentVehical />} />
      <Route path="/detail/:id" element={<VehicalDetail />} />

      {/* All Report */}
      <Route path="/report" element={<TestReport />} />
    </Routes>
  </BrowserRouter>
);
