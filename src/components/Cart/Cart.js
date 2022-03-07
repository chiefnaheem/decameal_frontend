import React, {useContext} from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from '../../context/cart-context'
import CartItem from './CartItem';
const Cart = ({onClose}) => {
    const ctx = useContext(CartContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const hasItems = ctx.items.length > 0

    const cartItemAddHandler = (item) => {
        ctx.addItem(item);
    }
    const cartItemRemoveHandler = (id) => {
        ctx.removeItem(id)
    }

//   const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 13 }];
  return (
    <Modal onClose={onClose}>
      <ul className={classes["cart-items"]}>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
