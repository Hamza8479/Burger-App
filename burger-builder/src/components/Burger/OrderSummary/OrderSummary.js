import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

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
      <p>
        {" "}
        <b>Total Price: {props.price.toFixed(2)} </b>{" "}
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Auxiliary>
  );
};

export default OrderSummary;
