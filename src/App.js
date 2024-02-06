import Dashboard from "./components/Dashboard/Dashboard";
import SignIn from "./components/SignIn";
import DashboardEnterprise from "./components/Dashboard/DashBoardEnterprise";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManagerDashboard from "./components/Dashboard/ManagerDashboard";
import DashboardSummary from "./components/Dashboard/DashboardSummary";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard_enterprise" element={<DashboardEnterprise/>} />
          <Route path="/dashboard_manager" element={<ManagerDashboard/>} />
          <Route path="/dashboard_summary" element={<DashboardSummary/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
