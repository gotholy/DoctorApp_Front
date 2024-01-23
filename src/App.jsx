import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage/homepage"
import UserLogin from "./pages/logins/UserLogin"
import DoctorLogin from "./pages/logins/DoctorLogin"
import UserForm from "./components/userForm/UserForm"
import DoctorForm from "./components/doctorForm/DoctorForm"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route path="/doctorlogin" element={<DoctorLogin/>}/>
      <Route path="/userregister" element={<UserForm/>}/>
      <Route path="/doctorregister" element={<DoctorForm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
