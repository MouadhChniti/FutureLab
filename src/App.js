import Fm from './pages/financialModel';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route,Router } from "react-router-dom"
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
//import socketIoClient from './socketIoClient';






const App = () => {
  /*socketIoClient();
 return <div>
   hello !
 </div>*/
 
  
    /*axios.post("http://localhost:8000/api/accounts/login/", {email: "omar@gmail.com",password: "password"}).then(result => {
      console.log(result.data.token)
      localStorage.setItem("token", result.data.token)
      //navigate("/home")
    }).catch(err => {
      console.log('error')
    })
  
  return (
    <div>
      <div>hello!</div>

    </div>
  )*/
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/fm" element={<Fm />} />
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
        <Route path="/datasets" element={<Datasets />} />

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
