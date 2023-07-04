import { AppBar, Button, Stack, IconButton, Toolbar, Typography } from "@mui/material"
import {Navigate} from 'react-router-dom';

import AppsIcon from '@mui/icons-material/Apps';

function PerfileDM() {

  return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <AppsIcon href="/client"/>
          </IconButton>
          <Typography variant='h7' component='' sx={{flexGrow: 1}} padding={3}>
          <Button color='inherit' href="/client">Client # ID</Button>
          </Typography>
          <Stack direction='row' spacing={3} edge='end'>
            <Button color='inherit' href="/client/myproducts">My Products</Button>
            <Button color='inherit' href="/client/inway">In Way</Button>
          </Stack>
        </Toolbar>
      </AppBar>
  );
}

export default PerfileDM;