import React, { useContext, useState } from 'react'
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
export const ProductDisplay = (props) => {

    const {product}=props;
    const {addToCart} = useContext(ShopContext);

    const [showMessage, setShowMessage] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [size, setSize] = useState('L');


    const handleClick = () => {
        setShowOverlay(true);
        setShowMessage(true);

        // Hide the message and overlay after 3 seconds
        setTimeout(() => {
        setShowOverlay(false);
        setShowMessage(false);
        }, 1500);
    };
    

  return (
    <>
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>{122}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Product quality is 100% guaranteed
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div onClick={() => {setSize('S')}} className={size === 'S' ? 'active' : ''}>S</div>
                    <div onClick={() => {setSize('M')}} className={size === 'M' ? 'active' : ''}>M</div>
                    <div onClick={() => {setSize('L')}} className={size === 'L' ? 'active' : ''}>L</div>
                    <div onClick={() => {setSize('XL')}} className={size === 'XL' ? 'active' : ''}>XL</div>
                    <div onClick={() => {setSize('XXL')}} className={size === 'XXL' ? 'active' : ''}>XXL</div>
                </div>
            </div>
            <button onClick={()=>
            {
                addToCart(product.id);
                handleClick();
            }}>
                ADD TO CART
            </button>
            <p className="productdisplay-right-category"><span>Category :</span> {product.category}</p>
            <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
        </div>
       
    </div>
    {showOverlay && <div className="overlay"></div>}
      {showMessage && (
        <div className="message-container">
          <div className="message">
            Cart updated successfully!
          </div>
        </div>
      )}
    </>
  )
}
