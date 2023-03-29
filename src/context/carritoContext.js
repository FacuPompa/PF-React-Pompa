import { createContext, useState } from "react";
import products from "../components/products/products";

const carritoContext = createContext({ carrito: [] });
const Provider = carritoContext.Provider;

export function CarritoContextProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

 
  function addItem(product, count) {
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
    
  const removeItemFromCarrito = (productId) => {
    const newCarrito = carrito.filter((product) => product.id !== productId);
    setCarrito(newCarrito);
  };

  return(
    <CarritoContextProvider value ={{carrito, removeItemFromCarrito}}>
      {children}
      </CarritoContextProvider>
  );


  function getCountInCarrito() {
    return carrito.reduce((accum, item) => accum = accum + item.count, 0);
  }

  function getPriceInCarrito() {
    const total = carrito.reduce((accumulator, currentProduct) => {
      return accumulator + currentProduct.precio * currentProduct.count;
    }, 0);
    return total.toFixed(2);
  }
  

  function isInCarrito(id) {
    return carrito.some((product) => product.id === id);
  }

  return (
    <Provider
      value={{
        carrito,
        addItem,
        test: "ok",
        isInCarrito,
        removeItemFromCarrito,
        getPriceInCarrito,
        getCountInCarrito
      }}
    >
      {children}
    </Provider>
  );
    }
    

    

export default carritoContext;

