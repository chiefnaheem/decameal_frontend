import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = ({onClick}) => {
    const [highLight, setHighLight] = useState(false)
    const ctx = useContext(CartContext)
    const {items} = ctx
    const numberOfCartItems = items.reduce((currNum, item) => currNum+ item.amount, 0)
    const btnClasses = `${classes.button} ${highLight ? classes.bump : ''}`
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
      setHighLight(true)
      const timer = setTimeout(() => {
          setHighLight(false)
      }, 300)
      return () => {
          clearTimeout(timer)
      }
    }, [items]);
  return (
    <button className={btnClasses} onClick={onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
      
  );
}

export default HeaderCartButton;
