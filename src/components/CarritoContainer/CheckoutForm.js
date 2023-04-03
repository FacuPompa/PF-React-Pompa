import React, { useState } from "react";
import Button from "../Button";
import { db } from '../../services/firestore';
import Swal from 'sweetalert2';

export default function CheckoutForm({ handleCheckout }) {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    phone: "",
  });

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      nombre: "",
      email: "",
      phone: "",
    });
  }

  function handleCreateOrder(userData) {
    // Agrega los detalles de la orden a la base de datos de Firebase
    db.collection("orders").add({
      nombre: userData.nombre,
      email: userData.email,
      phone: userData.phone,
    }).then(function(docRef) {
      // Muestra una alerta con el ID de la compra utilizando Sweet Alert
      Swal.fire({
        title: "Compra completada",
        text: "El ID de la compra es: " + docRef.id,
        icon: "success",
      });
    }).catch(function(error) {
      // Muestra una alerta si ocurre un error
      Swal.fire({
        title: "Error",
        text: "Ha ocurrido un error: " + error.message,
        icon: "error",
      });
    });
  }

  return (
    <div>
      <h2 style={{ color: "#eee" }}>Ingresa tus datos para finalizar tu compra</h2>
      <div className="div-checkout">
        <label className="label-checkout">Nombre:</label>
        <input
          value={userData.nombre}
          name="nombre"
          type="text"
          required
          onChange={handleChange}
        />
      </div>

      <div className="div-checkout">
        <label className="label-checkout">Email:</label>
        <input
          value={userData.email}
          name="email"
          type="email"
          required
          onChange={handleChange}
        />
      </div>

      <div className="div-checkout">
        <label className="label-checkout">Teléfono:</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"
          required
          onChange={handleChange}
        />
      </div>
      <Button onTouchButton={() => handleCreateOrder(userData)}>Crear orden</Button>
      <Button className="boton-form" onTouchButton={clearForm}>Borrar datos</Button>
    </div>
  );
}
