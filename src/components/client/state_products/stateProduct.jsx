import { AppBar, Button, Stack, IconButton, Toolbar, Typography } from "@mui/material"
import {Navigate} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';

import state_Product_Card from "../../Cards/state_Products/state_Product_Card.jsx"

function StateProduct() {

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
        <Button color='inherit' href="/client/delivery_man">Delivery Man</Button>
        <Button color='inherit' href="/client/my_products">My Products</Button>
      </Stack>
    </Toolbar>
  </AppBar>
    <state_Product_Card 
    name_card = "Nombre" 
    bool1 = {true} bool2 = {true} bool3 = {true} bool4 = {true} />
    </div>
    
  );
}

export default StateProduct;