import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage/homepage"
import UserLogin from "./pages/logins/UserLogin"
import DoctorLogin from "./pages/logins/DoctorLogin"
import UserForm from "./components/userForm/UserForm"
import DoctorForm from "./components/doctorForm/DoctorForm"
import UserDashboard from "./pages/Userdashboard/UserDashboard"
import DoctorDashboard from "./pages/Doctordashboard/DoctorDashboard"
import UserProtector from "./pages/Protector/UserProtector"
import DoctorProtector from "./pages/Protector/DoctorProtector"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/doctorlogin" element={<DoctorLogin/>}/>
      <Route element={<UserProtector/>}>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      </Route>
      <Route element={<DoctorProtector/>}>
      <Route path="/doctordashboard" element={<DoctorDashboard/>}/>
      </Route>
      <Route path="/userregister" element={<UserForm/>}/>
      <Route path="/doctorregister" element={<DoctorForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
