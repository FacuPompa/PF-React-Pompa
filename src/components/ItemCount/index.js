import { useState } from "react";
import Button from "../Button";
import "./styles.scss";

const ItemCount = ({ initial, stock, onAddToCarrito }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="itemcount_container">
      <small>Agregue la cantidad que quiera al carrito</small>
      <div className="itemcount_control">
        <Button color="red" onTouchButton={decrease}>
          -
        </Button>
        <span className="itemcount_count">{count}</span>
        <Button color="green" onTouchButton={increase}>
          +
        </Button>
      </div>

      <div className="itemcount_btns">
        <Button
          color="orange"
          className="boton"
          onTouchButton={() => onAddToCarrito(count)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
export default ItemCount;
