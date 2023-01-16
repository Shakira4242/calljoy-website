import './App.css';

import NavigationBar from './NavigationBar.js';
import CompanyTestimonial from './CompanyTestimonial.js';
import Footer from './Footer.js';
import Login from './Login.js';
import OTP from './OTP.js';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login/" element={<LoginPage/>}/>
        <Route path="otp/" element={<OTPPage/>}/>
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
      <Footer/>
    </>
  );
}

export default App;