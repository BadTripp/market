import Cart from "./cart/Cart"
import './App.css';
import Navbar from './navbar/Navbar';
import Products from './product/Products';

function App() {

  const cartProducts=[{
    brand:"nike srapid",
    desc:"Scarpe velocissime",
    price:100,
    img:""
  },
]




  return (
    <div className="App">
     <Navbar></Navbar>
     <Products></Products>
     
    </div>
  );
}

export default App;
