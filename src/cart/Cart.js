import "./cart.css";

function Cart(props) {
    
  return (
    <>
      <h2>Card</h2>
      {props.cart.map((cartp) => (
        <div class="card">
          <div class="container">
            <h4>
              <b>{cartp.brand}</b>
            </h4>
            <p>{cartp.price}</p>
          </div>
        </div>
      ))}
      
    </>
  );
}
export default Cart;
