import "./nav.css"
import Cart from "../cart/Cart"
import user from "../img/user.png";
import cart from "../img/cart.png";
import logo from "../img/logo.jpg";
import { useState } from "react";


function Navbar(props) {
    const [showCart,setShowCart]=useState(false);
    console.log(props.cart)
    function onCart (event){
        event.preventDefault();
        (showCart) ? setShowCart(false):setShowCart(true);
    }
  return (
    
      <nav className="navbar">
        <div className="nav">
          <img src={logo} class="brand-logo" alt="" />
          <div className="nav-items">
            <div class="search">
              <input
                type="text"
                className="search-box"
                placeholder="search brand, product"
              />
              <button className="search-btn">search</button>
            </div>
            <a >
              <img src={user} alt="" />
            </a>
            <a >
              <img onClick={onCart} src={cart} alt="" />
              {(showCart) && <Cart cart={props.cart}></Cart>}
            </a>
          </div>
        </div>
      </nav>
    
  );
}
export default Navbar;
