import logo from './logo.svg';
import './App.css';
import Heading from './Heading.js';
import NavigationBar from './NavigationBar.js';
import Pricing from './Pricing.js';
import FAQ from './FAQ.js';

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
        <Route path="pricing/" element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const HomePage = () => {
  return (
    <>
      <NavigationBar/>
      <Pricing/>
    </>
  );
}

const PricingPage = () => {
  return (
    <>
      <NavigationBar/>
      <Pricing/>
    </>
  );
}

export default App;