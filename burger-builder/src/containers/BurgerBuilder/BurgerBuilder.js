import React, { useState } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const BurgerBuilder = () => {
  const [state, setSate] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  });

  const addIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    setSate({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  const removeIngredientHandler = (type) => {};
  return (
    <Auxiliary>
      <Burger ingredients={state.ingredients} />
      <BuildControls ingredientAdded={addIngredientHandler} />
    </Auxiliary>
  );
};

export default BurgerBuilder;
