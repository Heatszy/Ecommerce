import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Auth from './pages/Auth.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kid_banner from './Components/assets/banner_kids.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Auth/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>   
  );
}

export default App;
