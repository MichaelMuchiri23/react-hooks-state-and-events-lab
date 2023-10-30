import React, {useState} from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)

  const goods = cart ? "Remove From Cart" : "Add to Cart" 

  const list = cart ? "in-cart" : ""

  function handleClick(){
    setCart(!cart)
  }
  
  return (
    <li className={list}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{goods}</button>
    </li>
  );
}

export default Item;
