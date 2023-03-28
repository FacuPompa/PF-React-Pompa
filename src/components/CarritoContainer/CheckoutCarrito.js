import React, { useState } from "react";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

function CheckoutCarrito({ carrito, total }) {
  const navigateTo = useNavigate();

  async function handleCheckout(userData) {
    const orderData = {
      buyer: userData,
      items: carrito,
      total: total,
      timestamp: new Date(),
    };
    const id = await createOrder(orderData);

    navigateTo(`/checkout/${id}`);
  }

  return (
    <div>
      <CheckoutForm onSubmit={handleCheckout} />
    </div>
  );
}

export default CheckoutCarrito;
