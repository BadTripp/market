function Product(props){

    const onAddCart =()=>{
        console.log(props.product)
        props.onAddCart(props.product);
    }

    return(
        <div class="product-card">
        <div class="product-image">
          <span class="discount-tag">50% off</span>
          <img src={props.product.img} class="product-thumb" alt="" />
        </div>
        <div class="product-info">
          <h2 class="product-brand">{props.product.brand}</h2>
          <p class="product-short-des">{props.product.desc}</p>
          <span class="price">{props.product.price}</span>
          <button onClick={onAddCart}>Add to Cart</button>
        </div>
      </div>
    );
}

export default Product;