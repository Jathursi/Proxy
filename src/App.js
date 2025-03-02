import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlockedList from "./Components/BlockedList"; // Adjust the path if needed
import React from "react";
import Dashboard from "./Components/Dashboard";
import Proxy from "./Components/Proxy";
import Docker from "./Components/Docker";

function App() {
  return(
  <Router>
  <div className="bg-gray-900 text-white min-h-screen">
    <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/BlockedList" element={<BlockedList/>}/>
  <Route path="/Proxy" element={<Proxy/>}/>
  <Route path="/Docker" element={<Docker/>}/>
  </Routes>
      </div>
    </Router>
  );
}

export default App;
