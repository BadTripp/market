import { useEffect, useState } from "react";
import Product from "./Product";
import "./product.css";

function Products(props) {
  //-brand -desc -price string.includes(substring)

  const [products, setProducts] = useState([
    {
      id: 0,
      brand: "nike srapid",
      desc: "scarpe velocissime",
      price: 100,
      img: "https://img01.ztat.net/article/spp-media-p1/33fa22c18de743c4bd7a7e062e90e902/1906c2100d874597825e440884aa2c4d.jpg",
    },
    {
      id: 1,
      brand: "adidas 3200",
      desc: "scarpe pe salti enormi",
      price: 1000,
      img: "https://img01.ztat.net/article/spp-media-p1/53870a2a8cbe3f3b85938cf03050432b/339f02edbc4b4a1bb319dcd522a9c711.jpg",
    },
    {
      id: 2,
      brand: "fiasco de vino",
      desc: "vino bono della casa mia",
      price: 100,
      img: "https://www.castellidelgrevepesa.it/wp-content/uploads/2018/03/cagr-chcl-fiasco.jpg",
    },
    {
      id: 3,
      brand: "sedia de legno",
      desc: "perfetta pe controllare la via",
      price: 100,
      img: "https://www.mobilclick.it/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/_/sedia_savoy_impagliata_in_legno_tinta_noce_temporary_outlet_sedie_42b-rist_0.jpg",
    },
  ]);
  const [clone, setClone] = useState(products);

  const onAddCart = (product) => {
    console.log(product);
    props.onAddCart(product);
  };

  useEffect(() => {
    if (props.searchText.length === 0) {
      setProducts(clone);
      console.log(clone);
    } else {
      let newproducts = clone.filter((prod) =>
        prod.brand.includes(props.searchText) || prod.desc.includes(props.searchText)
      );
      setProducts(newproducts);
      
    }
  }, [props.searchText]);

  return (
    <div class="product-container">
      {products.map((product) => (
        <Product onAddCart={onAddCart} product={product}></Product>
      ))}
    </div>
  );
}
export default Products;
