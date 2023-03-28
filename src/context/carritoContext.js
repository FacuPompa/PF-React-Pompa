import { createContext, useState } from "react";

const carritoContext = createContext({ carrito: [] });
const Provider = carritoContext.Provider;

export function CarritoContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  function addProduct(product, count) {
    const newCarrito = JSON.parse(JSON.stringify(carrito));

    if (isInCarrito(product.id)) {

      let index = carrito.findIndex((productInCarrito) => productInCarrito.id === product.id);
      newCarrito[index].count = newCarrito[index].count + count;
    } else {
      newCarrito.push({ ...product, count });
    }
    setCarrito(newCarrito);
  }

  function clearCarrito() {

  }

  function removeproductFromCarrito(id) {
    /* eliminar/filtrar products con id recibido */
    /* ESTO ESTÁ MALLL  */
    const newCarrito = JSON.parse(JSON.stringify(carrito));
    newCarrito.pop();
    setCarrito(newCarrito);
  }

  function getCountInCarrito() {
    let total = 0;
    carrito.forEach((product) => total + product.count);
    return total;
  }

  function getPriceInCarrito() {
    return 5600;
  }

  function isInCarrito(id) {
    return carrito.some((product) => product.id === id);
  }

  return (
    <Provider
      value={{
        carrito,
        addProduct,
        test: "ok",
        isInCarrito,
        removeproductFromCarrito,
        getPriceInCarrito,
      }}
    >
      {children}
    </Provider>
  );
}

export default carritoContext;

