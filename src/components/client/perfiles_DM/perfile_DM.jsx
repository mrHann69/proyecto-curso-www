import { AppBar, Button, Stack, IconButton, Toolbar, Typography } from "@mui/material"
import {Navigate} from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';

import Perfile_Card from '../../Cards/perfile/perfile_Card.jsx';

function PerfileDM() {

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
            <Button color='inherit' href="/client/my_products">My Products</Button>
            <Button color='inherit' href="/client/in_way">In Way</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Perfile_Card boolRequest={false}/>
      </div>
  );
}

export default PerfileDM;