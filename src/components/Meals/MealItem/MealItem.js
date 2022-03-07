import React, {useContext} from "react";
import classes from './MealItem.module.css'
import MealItemForm from "./MealItemForm";
import CartContext from '../../../context/cart-context'
const MealItem = ({ id, name, description, price }) => {
    const ctx = useContext(CartContext)

  const prices = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
        id,
        name,
        amount,
        price
    })
  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{prices}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
