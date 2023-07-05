import {
  AppBar,
  Button,
  Stack,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Navigate } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";

import Product_Card from "../Cards/Product/product_Card";

function Shippings() {
  return (
    <div>
      <>
        <h1>Show available delivery man</h1>
        <div>Contenido de la pagina de delivery man</div>
      </>
      <Product_Card number="1" />
      <Product_Card number="1" />
    </div>
  );
}

export default Shippings;
