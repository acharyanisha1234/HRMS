import "./App.css"
import { Routes, Route } from "react-router-dom"
import Loginform from "./pages/Login.jsx";
import Home from "./pages/home.jsx";
import Employeeform from "./pages/Employee.jsx";
import Dashboardform from "./pages/Dashboard.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="home" element={<Home />} >
          <Route path="employee" element={<Employeeform />} />
          <Route path="Dashboard" element={<Dashboardform />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
