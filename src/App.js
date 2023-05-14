import Fm from './pages/financialModel';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home';
import Fhome from './pages/firsthome';
import Login from './pages/login'
import Signup from './pages/signup'
import Forgetpass from './pages/forgetPass'
import Profile from './pages/profile'
import Editprofile from './pages/editProfile'
import Dashboard from './pages/dashboard'
import Datasets from './pages/datasets';






const App = () => {
 


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fm" element={<Fm />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Fhome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<Forgetpass />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/dashboard"   element={<Dashboard/>}/>
        <Route path="/datasets"   element={<Datasets/>}/>
        
        
        

      </Routes>
    </BrowserRouter>

  );
}

export default App;
