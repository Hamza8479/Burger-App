import React, { useState } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

const BurgerBuilder = () => {
  const [state, setState] = useState({
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
  });

  const updatePurchaseState = (ingredients) => {
    // const ingred = {
    //   ...state.ingredients,
    // };
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setState({ purchaseable: sum > 0 });
  };

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

    setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchaseable: true,
    });
    // updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENTS_PRICES[type];
    const oldPrice = state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchaseable: true,
    });
    // updatePurchaseState(updatedIngredients);
  };

  const disabledInfo = {
    ...state.ingredients,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <Auxiliary>
      <Modal>
        <OrderSummary ingredients={state.ingredients} />
      </Modal>
      <Burger ingredients={state.ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchaseable={state.purchaseable}
        price={state.totalPrice}
      />
    </Auxiliary>
  );
};

export default BurgerBuilder;
