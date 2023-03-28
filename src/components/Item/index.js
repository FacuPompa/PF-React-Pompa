import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Favorite from "../Favorite";   


export function Item(props) {

    return (
      <div
      style={{ color: props.product.stock === 0 ? "#ee0033" : "#151515" }}
      className="item-card"

      >
      <Favorite />
          <img src={props.product.imagen} alt={props.product.nombre} />
      <br />
      {props.product.stock === 0 && <small>No hay stock</small>}
          <h4>{`${props.product.nombre}`}</h4>
      <br />
          <Link to={`/detalle/${props.product.id}`}>
            <Button>Ver Detalles</Button>
          </Link>
    </div>
    );
    }