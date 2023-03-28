import React from "react";
import {Item} from "../Item/index";
import "./styles.scss";

export default function ItemList(props) {
  return (
      <div className="items-container">
        {props.products.map((product)=>( 
          <Item key={product.id} product={product}/>
          ))}
      </div>
)
  
}

