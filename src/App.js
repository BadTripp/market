import Cart from "./cart/Cart"
import './App.css';
import Navbar from './navbar/Navbar';
import Products from './product/Products';
import { useState } from "react";

function App(props) {
  const [searchText,setSearchText] = useState("");
  const [cartProducts,setCartProducts] = useState([{
    brand:"nike srapid",
    desc:"Scarpe velocissime",
    price:100,
    img:""
  },
]);


const onAddCart =(product)=>{
  setCartProducts(()=>[
    ...cartProducts,
    product
  ]);
}
const onSearch =(text)=>{
  console.log(text)
    setSearchText(text);
}
const onRemove=(cart)=>{
  console.log(cart)
  let prodUpdated=cartProducts.filter((prod)=>prod.id != cart.id)
  setCartProducts(prodUpdated);
}


  return (
    <div className="App">
     <Navbar onRemove={onRemove} onSearch={onSearch} cart={cartProducts}></Navbar>
     <Products searchText={searchText}  onAddCart={onAddCart}></Products>
     
    </div>
  );
}

export default App;
