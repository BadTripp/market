import "./cart.css";

function Cart(props) {
    let totale=0;
   totale=props.cart.reduce((accum,cartsuc)=> accum + cartsuc.price,0)
    
   const onRemove=(cart)=>{
    console.log(cart)
        props.onRemove(cart);
   }
   
  return (
    <>
      <h2>Card</h2>
      <div className="card">
      {props.cart.map((cartp) => (
        
          <div className="container">
            <h4>
              <b>Prodotto:{cartp.brand}</b>
            </h4>
            <p>Prezzo:{cartp.price}</p>
            <button onClick={()=>onRemove(cartp)}> -rimuovi</button>
            </div>
            
            
            
      ))}
      <b>Totale Carrello:{totale}€</b>
      </div>
    </>
  );
}
export default Cart;
