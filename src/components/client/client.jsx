import { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Stack,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import { Outlet, Link } from "react-router-dom";

function Client() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <Link to="/client">
              <AppsIcon />
            </Link>
          </IconButton>
          <Typography
            variant="h7"
            component=""
            sx={{ flexGrow: 1 }}
            padding={3}
          >
            <Button
              color="inherit"
              href="/client/profile"
            >
              Profile
            </Button>
          </Typography>
          <Stack direction="row" spacing={3} edge="end">
            <Button
              color="inherit"
              href="/client/deliveryman"
            >
              Delivery Man
            </Button>
            <Button
              color="inherit"
              href="/client/shippings"
            >
              Shippings
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Client;
