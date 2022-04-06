import "./nav.css"
import user from "../img/user.png";
import cart from "../img/cart.png";
import logo from "../img/logo.jpg";
import { useState } from "react";

function Navbar() {
    const [showCart,setShowCart]=useState(false);

  return (
    
      <nav class="navbar">
        <div class="nav">
          <img src={logo} class="brand-logo" alt="" />
          <div class="nav-items">
            <div class="search">
              <input
                type="text"
                class="search-box"
                placeholder="search brand, product"
              />
              <button class="search-btn">search</button>
            </div>
            <a >
              <img src={user} alt="" />
            </a>
            <a >
              <img onClick={setShowCart(true)} src={cart} alt="" />
              {<Cart></Cart>}
            </a>
          </div>
        </div>
      </nav>
    
  );
}
export default Navbar;
