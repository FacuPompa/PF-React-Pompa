import { BsFillCartFill } from "react-icons/bs";
import "./styles.scss";
import { useContext } from "react";
import carritoContext from "../../context/carritoContext";

function CarritoWidget() {
  const { carrito, test } = useContext(carritoContext);

  const carritoCount = carrito.length;
  return (
    <span className="cart-widget nav">
      <BsFillCartFill className="icon" />
      <span className="badge nav">{carritoCount}</span>
    </span>
  );
}

export default CarritoWidget;
