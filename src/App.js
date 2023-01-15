import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import NavigationBar from './NavigationBar.js';
import CompanyTestimonial from './CompanyTestimonial.js';
import FAQ from './FAQ.js';
import Footer from './Footer.js';
import Login from './Login.js'

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
      </Routes>
    </BrowserRouter>
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