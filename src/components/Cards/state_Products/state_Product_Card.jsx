import { useState } from "react";
import "./state_Product_Card.css";

function state_Product_Card(number_card, bool1, bool2, bool3, bool4) {
  const product_state = 
    {
        state_1: bool1 ? "---" : "+++",
        state_2: bool2 ? "---" : "+++",
        state_3: bool3 ? "---" : "+++",
        state_4: bool4 ? "---" : "+++"
    };

  return (
    <div>
        <div className="container_Product-Card">
            <h3>Card_{number_card}</h3>
            <h3>{product_state.state_1}</h3>
            <h3>{product_state.state_2}</h3>
            <h3>{product_state.state_3}</h3>
            <h3>{product_state.state_4}</h3>
        </div>
    </div>
  );
}

export default state_Product_Card;
