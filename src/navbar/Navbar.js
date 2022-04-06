import "./nav.css"
import Cart from "../cart/Cart"
import user from "../img/user.png";
import cart from "../img/cart.png";
import logo from "../img/logo.jpg";
import { useState,useEffect } from "react";


function Navbar(props) {
    const [showCart,setShowCart]=useState(false);
    const [nProdotti,setNProdotti]= useState(0);
    function onCart (event){
        event.preventDefault();
        (showCart) ? setShowCart(false):setShowCart(true);
    }
    const onSearch =(event)=>{
        props.onSearch(event.target.value);
    }
    const onRemove=(cart)=>{
        console.log(cart)
        props.onRemove(cart);
   }
   
   useEffect(() => {
    (props.cart.length==0)?setNProdotti("") :setNProdotti(props.cart.length);
}, [props.cart]);
  return (
    
      <nav className="navbar">
        <div className="nav">
          <img src={logo} class="brand-logo" alt="" />
          <div className="nav-items">
            <div class="search">
              <input onChange={onSearch}
                type="text"
                className="search-box"
                placeholder="cerca un prodotto,o quello che te pare"
              />
              <p className="search-btn">search</p>
            </div>
            <a >
              <img src={user} alt="" />
            </a>
            <a >
              <img onClick={onCart} src={cart} alt="" />
              {(showCart) && <Cart onRemove={onRemove} cart={props.cart}></Cart>}
            </a>
            <a>{nProdotti}</a>
          </div>
        </div>
      </nav>
    
  );
}
export default Navbar;
