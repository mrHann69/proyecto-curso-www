import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import black from "../../../public/users/DM_Black.png";
import red from "../../../public/users/DM_Red.png"

function Perfile_Card({boolRequest}) {
  const [dirimage, setDirimage] = useState("");
  /* If boolRequest is negative that means is a normal delivery 
  man but if it's positive is a Delivery Man how request service */
  const perfile_C = {
    title: "Card_" + "Client" ,
    image: boolRequest ? "---" : "+++",
  };

  useEffect(()=>{
    setDirimage(boolRequest ? dirimage.concat(black): dirimage.concat(red)) 
  },[boolRequest]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={dirimage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {perfile_C.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Modal</Button>
      </CardActions>
    </Card>
  );
}

export default Perfile_Card;
