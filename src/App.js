import Cart from "./cart/Cart"
import './App.css';
import Navbar from './navbar/Navbar';
import Products from './product/Products';
import { useState } from "react";

function App(props) {

  const [cartProducts,setCartProducts] = useState([{
    brand:"nike srapid",
    desc:"Scarpe velocissime",
    price:100,
    img:""
  },
]);


const onAddCart =(product)=>{
  console.log("arrivato"+product)
}


  return (
    <div className="App">
     <Navbar></Navbar>
     <Products onAddCart={onAddCart}></Products>
     
    </div>
  );
}

export default App;
