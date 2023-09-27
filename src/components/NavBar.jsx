import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { PetsOutlined, Notifications } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import { IconsContainer, StyledToolbar, UserBox, Search } from "../styles/style";

const NavBar = () => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Yash Arora
          </Typography>
          <PetsOutlined sx={{ display: { xs: "block", sm: "none" } }} />
          <Search >
            <Box >
              <InputBase placeholder="search.."  />
            </Box>
          </Search>
          <IconsContainer>
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              style={{ width: "30", height: "30" }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80"
              onClick={() => isOpen(true)}
            />
          </IconsContainer>
          <UserBox>
            <Avatar
              style={{ width: "30", height: "30" }}
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80"
              onClick={() => isOpen(true)}
            />
            <Typography variant="span">John</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          //   anchorEl={anchorEl}
          open={open}
          onClose={(e) => isOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </>
  );
};

export default NavBar;
