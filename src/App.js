// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from './component/Products';
import NoPage from './component/NoPage';
import About from './component/About';
// import Contact from './component/Contact';
import Testimonial from './component/Testimonial';
import Product from './component/Product';
import Cart from './component/Cart';
// import Footer from './component/Footer';
// import LoginUi from './component/LoginUi';

function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NoPage />} />
          
        
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
   
  );
}

export default App;
