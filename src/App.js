import Home from "./components/Pages/Home";
import { Routes, Route} from "react-router-dom";
import Contact from './components/Pages/Contact';
import Shop from './components/Pages/Shop';
import Error from './components/Pages/Error';
import Header from './components/Header';
import ProductCat from './components/ProductCat';
import AboutUs from "./components/Pages/AboutUs";

import './App.css';
import Footer from "./components/Footer";
import Deatils from "./components/Pages/Elements/Deatils";
import Card from "./components/Pages/Card";
import Checkout from "./components/Pages/Checkout";
function App() {
  return (
    <>
  <Header />    
    <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:name" element={<ProductCat/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/card" element={<Card />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/details/:id" element={<Deatils />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Error />} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
