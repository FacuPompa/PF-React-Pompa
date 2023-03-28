import React from "react";
import {Item} from "../Item/index";
import products from "../products/products";

export default function ItemList(props) {
  return (
<div>
{props.products.map((products)=><Item key={products.id} products={products}/>)}
</div>
)
  
}

/* export default function ItemList({ products ) {
  return (
    <div className="item-list-container">
      <ul className="item-list">
        {products.map((product) => (
          <li
            style={{ color: product.stock === 0 ? "#ee0033" : "#151515" }}
            className="item-card"
            key={product.id}
          >
            <Favorite />
            <img src={product.imagen} alt={product.nombre} />
            <br />
            {product.stock === 0 && <small>No hay stock</small>}
            <h4>{`${product.nombre}`}</h4>
            <br />
            <Link to={`/detalle/${product.id}`}>
              <Button>Ver Detalles</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} */
