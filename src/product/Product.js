import "./product.css"

function Product(props){

    const onAddCart =()=>{
        console.log(props.product)
        props.onAddCart(props.product);
    }

    return(
        <div className="product-card">
        <div className="product-image">
          <span className="discount-tag">50% de sconto</span>
          <img src={props.product.img} class="product-thumb" alt="" />
        </div>
        <div className="product-info">
          <h2 className="product-brand">{props.product.brand}</h2>
          <p className="product-short-des">{props.product.desc}</p>
          <span className="price">{props.product.price} €</span>
          <button className="card-btn" onClick={onAddCart}>+Add</button>
        </div>
      </div>
    );
}

export default Product;