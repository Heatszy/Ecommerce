import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../assets/LogoNavbar.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from '../assets/HamburgerIcon.png';

const Navbar = () =>{
    const [menu, setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const [isOpen, setIsOpen] = useState(false);

    const dropdown_toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul  className={`nav-menu ${isOpen ? 'nav-menu-visible' : ''}`}>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"? <hr/>:<></>}</li>
            </ul>
            {isOpen && (<div className="overlayy" onClick={()=>{setIsOpen(false)}}></div>)}
            <div className="nav-login-cart">
                <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link>
                <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            
        </div>
    )
}

export default Navbar

