import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Favorite from "../Favorite";        
        <ul>
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
        </ul>

        function Item(props) {
            const products = props.products.map(product => (
            <item key={products.id} name={products.nombre} />
            ));
            return (
                <ul>
                    {products}
                </ul>
        );
        }