import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    }
  );
  //   console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
