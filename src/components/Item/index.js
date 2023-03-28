import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Favorite from "../Favorite";   
import products from "../products/products";

export function Item(props) {

    return (
      <div
      style={{ color: products.stock === 0 ? "#ee0033" : "#151515" }}
      className="item-card"
      key={props.products.id}
      >
      <Favorite />
          <img src={props.products.imagen} alt={props.products.nombre} />
      <br />
      {props.products.stock === 0 && <small>No hay stock</small>}
          <h4>{`${props.products.nombre}`}</h4>
      <br />
          <Link to={`/detalle/${props.products.id}`}>
            <Button>Ver Detalles</Button>
          </Link>
    </div>
    );
    }