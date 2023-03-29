import React, { useState } from "react";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function CheckoutCarrito({ carrito, total }) {
  const navigateTo = useNavigate();

   function handleCheckout(userData) {
    let orderData = {
      buyer: userData,
      items: carrito,
      total: total,
      timestamp: new Date(),
    };
    const id = createOrder(orderData);
     console.log(id)
   
  }

  return (
    <div>
      <CheckoutForm handleCheckout={handleCheckout} />
    </div>
  );
}

export default CheckoutCarrito;