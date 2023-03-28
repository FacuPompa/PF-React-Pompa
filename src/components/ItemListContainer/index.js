import "./styles.scss";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db, app } from "../../services/firestore";


// función antes de async await

/* useEffect(() => {
  const getProduct = new Promise (resolve => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  
  if(idEditorial) {
  getProduct.then(res => setProduct(res.filter(product => product.editorial === idEditorial)));
  }else {
  getProduct.then(res => setProduct(res));
  }
}, [idEditorial]) */

async function getItemsFromDatabase() {
  const productsColectionRef = collection(db, "products");
  let snapshotProducts = await getDocs(productsColectionRef);
  const documents = snapshotProducts.docs;

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByEditorialFromDatabase(editorialURL) {
  const productsColectionRef = collection(db, "products");

  const q = query(productsColectionRef, where("editorial", "==", editorialURL));

  let snapshotProducts = await getDocs(q);
  const documents = snapshotProducts.docs;
  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}


function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const idEditorial = params.ideditorial;

  async function leerDatos() {
    if (idEditorial === undefined) {
      let respuesta = await getItemsFromDatabase();
      setProducts(respuesta);
      setIsLoading(false);
    } else {
      let respuesta = await getItemsByEditorialFromDatabase(idEditorial);
      setProducts(respuesta);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [idEditorial]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      {isLoading ? <Loader color="orange" /> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;