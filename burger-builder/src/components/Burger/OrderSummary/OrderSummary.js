import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}> {ingKey} </span>:
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Your Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Auxiliary>
  );
};

export default OrderSummary;
