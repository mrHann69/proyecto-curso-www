import { useState } from "react";

function state_Product_Card(name_card, bool1, bool2, bool3, bool4) {
  const product_state = 
    {
        state_1: bool1 ? "../../../public/states/point_white.png" : "../../../public/states/point_red.png",
        state_2: bool2 ? "../../../public/states/point_white.png" : "../../../public/states/point_orange.png",
        state_3: bool3 ? "../../../public/states/point_white.png" : "../../../public/states/point_yellow.png",
        state_4: bool4 ? "../../../public/states/point_white.png" : "../../../public/states/point_green.png"
    };

  return (
    <div>
        <div className="container_Product-Card">
            <h3>{name_card}</h3>
            <h3>{product_state.state_1}</h3>
            <h3>{product_state.state_2}</h3>
            <h3>{product_state.state_3}</h3>
            <h3>{product_state.state_4}</h3>
            botón
        </div>
    </div>
  );
}

export default state_Product_Card;
