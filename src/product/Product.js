function Product(props){


    return(
        <div class="product-card">
        <div class="product-image">
          <span class="discount-tag">50% off</span>
          <img src="img/card1.png" class="product-thumb" alt="" />
        </div>
        <div class="product-info">
          <h2 class="product-brand">{props.product.brand}</h2>
          <p class="product-short-des">{props.product.desc}</p>
          <span class="price">{props.product.price}</span>
          <button>Add to Cart</button>
        </div>
      </div>
    );
}

export default Product;