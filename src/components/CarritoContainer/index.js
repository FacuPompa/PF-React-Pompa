import React from "react";
import { useContext } from "react";
import carritoContext from "../../context/carritoContext";
import Button from "../Button";
import CheckoutCarrito from "./CheckoutCarrito";
import "./styles.scss";

function CarritoContainer() {
  const { carrito, removeItemFromCarrito, getPriceInCarrito } = useContext(carritoContext);

  return (
    <>
      <h1 className="titl-carrito">Tu Carrito</h1>

      <table className="carritoList">
        <thead className="carritoList_head">
          <tr className="carritoList_row">
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((products) => {
            return (
              <tr key={products.id} className="carritoList_row">
                <td>
                  <img className="img-final" width={250} height={350} src={products.imagen} alt={products.nombre} />
                </td>
                <td>{products.nombre}</td>
                <td>$ {products.precio}</td>
                <td>{products.count}</td>                
                <td>
                <Button color="#c63224" onTouchButton={() => removeItemFromCarrito(products.id)}>X</Button>
                </td>
                <th>$ {products.precio * products.cantidad}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      <div className="cartList_detail">
        <h4>El total de tu compra es de ${getPriceInCarrito()}</h4>
      </div>

      <CheckoutCarrito total={getPriceInCarrito()} cart={carrito}/>
    </>
  );
}

export default CarritoContainer;
