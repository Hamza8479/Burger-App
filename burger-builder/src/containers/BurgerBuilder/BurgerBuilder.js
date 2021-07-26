import React, { useState } from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const [state, setSate] = useState({
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  });

  return (
    <Auxiliary>
      <Burger ingredients={state.ingredients} />
      <div>Build Controls</div>
    </Auxiliary>
  );
};

export default BurgerBuilder;
