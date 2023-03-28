import "./styles.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useContext } from "react";
import carritoContext from "../../context/carritoContext";
import Loader from "../Loader";


import { collection, doc, getDoc} from "firebase/firestore";
import { db, app } from "../../services/firestore";

async function getSingleItemFromDatabase(idItem) {
  const productsColectionRef = collection(db, "products");
  const docRef = doc(productsColectionRef, idItem);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists() === false) throw new Error("No existe el documento");

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

function ItemDetailContainer() {
  const [products, setProducts] = useState({});

  const params = useParams();
  const idProducts = params.idProducts;

  useEffect(() => {
    getSingleItemFromDatabase(idProducts)
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  const { addItem, isInCarrito } = useContext(carritoContext);

  function onAddToCarrito(count) {
    alert(`Agregaste ${count} items al carrito`);
    addItem(products, count);
  }

  if (products.nombre === undefined) return <Loader />;

  return (
    <>
      <div className="card-detail_main">
        <div className="card-detail_img">
          <img src={products.imagen} alt={products.nombre} />
        </div>
        <div className="card-detail_detail">
          <h1>
            {products.nombre}
          </h1>
          <h2 className="priceTag">$ {products.precio}</h2>
          <small>{products.editorial}</small>
        </div>
        <ItemCount onAddToCarrito={onAddToCarrito} initial={1} stock={products.stock} />
      </div>
    </>
  );
}

export default ItemDetailContainer;
