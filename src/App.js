import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chart } from "chart.js/auto";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Bar from "./pages/BarChart";
import LineChart from "./pages/LineChart";
import PieChart from "./pages/PieChart";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <h5>MD PRODUCTIONS</h5>
      <div className="cont">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input/:type" element={<Input />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/line" element={<LineChart />} />
          <Route path="/pie" element={<PieChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
