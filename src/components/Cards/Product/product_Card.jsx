import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
//import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

function Product_Card({ id, name, description, price }) {
  //const ImageButton = styled(ButtonBase)(({ theme }) => ({
  const ImageButton = styled(Box)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "50% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const product_C = {
    title: `Card_${name}`,
    description1: `Description: product #${id}:`,
    description2: description,
    image: `https://picsum.photos/300/500?random=${id}`,
    price: `$ ${price}`,
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 200, width: "100%" }}
    >
      <ImageButton
        focusRipple
        style={{
          width: "40%",
        }}
      >
        <ImageSrc style={{ backgroundImage: `${<img src={product_C.image} alt='' />}` }} />

        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {product_C.title}
          </Typography>
        </Image>
      </ImageButton>
    </Box>
  );
}

export default Product_Card;
