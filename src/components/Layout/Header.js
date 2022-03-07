import React from "react";
import decameal from '../../assets/decameal.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>DecaMeals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
          <img src={decameal} alt="deca meal page"/>
      </div>
    </>
  );
};

export default Header;
