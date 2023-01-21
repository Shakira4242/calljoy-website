import './App.css';

import NavigationBar from './NavigationBar.js';
import CompanyTestimonial from './CompanyTestimonial.js';
import Footer from './Footer.js';
import Login from './Login.js';
import OTP from './OTP.js';
import Dashboard from './Dashboard.js';
import Stats from './Stats.js';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import supabase from './auth';
import React, { useEffect } from 'react';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login/" element={<LoginPage/>}/>
        <Route path="otp/" element={<OTPPage/>}/>
        <Route path="dashboard/" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const OTPPage = () => {
  return (
    <>
      <OTP/>
    </>
  );
}

const LoginPage = () => {
  return (
    <>
      <Login/>
    </>
  );
}

const HomePage = () => {
  return (
    <>
      <NavigationBar/>
      <CompanyTestimonial/>
      <Stats/>
      <Footer/>
    </>
  );
}

const DashboardPage = () => {  
  return (
    <Dashboard/>
  );
}

export default App;