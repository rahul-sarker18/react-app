import React from "react";
import './Cart.css'

const Cart = ({ card }) => {
  let total = 0;
  let shipping = 0;
  let quantity =0;
  for (const prodact of card) {
    total = total + prodact.price *quantity;
    shipping = shipping + prodact.shipping ;
    quantity =quantity+ prodact.quantity;
  }
  const tax =+(total * 0.1).toFixed(2);
  const grandtotal = total + shipping + tax;

  return (
    <div className="card">
      <h1>counter {quantity}</h1>
      <p>total: ${total}</p>
      <p>shipping : ${shipping}</p>
      <p>tax : ${tax}</p>
      <h4>greand total : ${grandtotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
