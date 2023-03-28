import React, { useState } from "react";
import Button from "../Button";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
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
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(userData)
  }

  return (
    <div>
      <h2 style={{color: "#eee"}} >Ingresa tus datos para finalizar tu compra</h2>
      <div className="div-checkout" >
        <label className="label-checkout">Nombre:</label>
        <input
          value={userData.name}
          name="name"
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
        disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={submitData}
      >
        Crear orden
      </Button>
      <Button className="boton-form" onClick={clearForm}>Vaciar formulario</Button>
    </div>
  );
}
