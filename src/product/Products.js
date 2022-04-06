import Product from "./Product";
import "./product.css"
function Products(props) {
  //-brand -desc -price 
  const products=[{
    brand:"nike srapid",
    desc:"Scarpe velocissime",
    price:100,
  },
  {
    brand:"Adidas 3200",
    desc:"Scarpe pe salti enormi",
    price:1000,
  },
  {
    brand:"Fiasco de vino",
    desc:"Se beve dalla bocca",
    price:100,
  },
  {
    brand:"Sedia de legno",
    desc:"Comoda per sedersi e fare risse",
    price:100,
  },
]


  return (
    <div class="product-container">
        {products.map(product =>(
          <Product product={product}></Product>
        ))}
    </div>
  );
}
export default Products;
