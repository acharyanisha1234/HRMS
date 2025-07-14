import "./App.css"
import { Routes, Route } from "react-router-dom"
import Loginform from "./pages/Login.jsx";
import Home from "./pages/home.jsx";
import Employeeform from "./pages/Employee.jsx";
import Dashboardform from "./pages/Dashboard.jsx"
import ProtectedRoute from "./components/home/Utils/protectedRoute.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="home" 
        element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
     }
     >
    
          <Route path="employee" element={<Employeeform />} />
          <Route path="Dashboard" element={<Dashboardform />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
