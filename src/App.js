import Fm from './pages/financialModel';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Home from './pages/home';
import Fhome from './pages/firsthome';
import Login from './pages/login'
import Signup from './pages/signup'
import Forgetpass from './pages/forgetPass'
import Profile from './pages/profile'
import Editprofile from './pages/editProfile'
import Dashboard from './pages/dashboard'
import Datasets from './pages/datasets';
import Provider from './components/privateroute';
import axios from 'axios';
import SocialModel from './pages/socialModel';
import DashboardSocial from './pages/dashboardSocial';
import Admin from './pages/admin';
//import socketIoClient from './socketIoClient';






const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/fm" element={<Fm />} />
        <Route path="/socialmodel" element={<SocialModel />} />
        {/* <Route element={<Provider />}>
          <Route path="/home" element={<Home />} />
        </Route>  */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Fhome />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<Forgetpass />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardSocial" element={<DashboardSocial />} />
        <Route path="/datasets" element={<Datasets />} />
        <Route path="/django-admin" element={<Admin />}/>

        {/* <Route element={<Provider />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Fhome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<Forgetpass />} />
        <Route element={<Provider />}>
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route element={<Provider />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<Provider />}>
          <Route path="/datasets" element={<Datasets />} />
        </Route>
        <Route element={<Provider />}>
          <Route path="/editprofile" element={<Editprofile />} />
        </Route>
        <Route element={<Provider />}>
          <Route path="/fm" element={<Fm />} />
      </Route> */}




      </Routes>
    </BrowserRouter>

  );
}

export default App;
