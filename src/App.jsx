import "./App.css"
import { Routes, Route } from "react-router-dom"
import Loginform from "./pages/Login.jsx";
import Home from "./pages/home.jsx";
import Employeeform from "./pages/Employee.jsx";
import Dashboardform from "./pages/Dashboard.jsx"
import ProtectedRoute from "./components/home/Utils/protectedRoute.jsx";
import Unauthorized from "./components/home/Utils/unauthorize.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/unauthorized" element={<Unauthorized/>} />
        <Route path="home" 
        element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
     }
     >
    
          <Route path="employee" element={
            <ProtectedRoute allowedRoles={["hr","manager","admin"]}>
               <Employeeform  />
            </ProtectedRoute>
         } 
            />
          
          <Route path="Dashboard" element={<Dashboardform />} />
        </Route>
        
      </Routes>
    </>
 )
 }

export default App;
