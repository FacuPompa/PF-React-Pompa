import React, { useState } from "react";
import Button from "../Button";
import { db } from '../../services/firestore';

export default function CheckoutForm({handleCheckout}) {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    phone: "",
  });

  console.log(userData);

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



 



  return (
    <div>
      <h2 style={{color: "#eee"}} >Ingresa tus datos para finalizar tu compra</h2>
      <div className="div-checkout" >
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
      <Button
        
        onTouchButton={()=>handleCheckout(userData)}
      >
        Crear orden
      </Button>
      <Button className="boton-form" oonTouchButton={clearForm}>Borrar datos</Button>
    </div>
  );
}