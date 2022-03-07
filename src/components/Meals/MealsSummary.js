import React from 'react';
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, delivered to You</h2>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious meal at your comfort</p>
      <p>All our meals are cooked with high-quality ingredients, just-in-time just as you want it and of course by our experienced chefs</p>
    </section>
  );
}

export default MealsSummary;
