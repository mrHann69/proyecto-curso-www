import { useState } from "react";

function Perfile_Card(bool, boolRequest) {

  //If bool is negative that means is a client but if it's positive is a Delivery Man
  const perfile_C = 
    {
        title: "Card_"+(bool ? "Client" : "Delivery_M"),
        user: bool ? "---" : "+++",
        image: boolRequest ? "---" : "+++"
    };

    function direction_Image(){
      const image_user = "../../../../src/public/";

      bool ? image_user += "CLTE_" : image_user +="DM_";

      boolRequest ? image_user += "Black" : image_user +="Red";

      return image_user;
    }
    
  return (
    <div>
        <div className="container_Product-Card">
            <img src={direction_Image()} alt='' />
            <h3>{perfile_C.title}</h3>
        </div>
    </div>
  );
}

export default Perfile_Card;
