import { AppBar, Button, Stack, IconButton, Toolbar, Typography } from "@mui/material"
import {Navigate} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';

import Product_Card from "../../Cards/Product/product_Card"

function Product() {

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <AppsIcon href="/client"/>
          </IconButton>
          <Typography variant='h7' component='' sx={{flexGrow: 1}} padding={3}>
          <Button color='inherit' href="/client">Client # ID</Button>
          </Typography>
          <Stack direction='row' spacing={3} edge='end'>
            <Button color='inherit' href="/client/Delivery_Man">Delivery Man</Button>
            <Button color='inherit' href="/client/In_Way">In Way</Button>
          </Stack>
        </Toolbar>
    </AppBar>
    <Product_Card number='1'/>
    <Product_Card number="1"/>
    </div>
    
  );
}

export default Product;