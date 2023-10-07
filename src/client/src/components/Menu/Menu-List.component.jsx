import React, { useState } from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";

const menuList = [
  { name: "Home", icon: "" },
  { name: "Channel", icon: "" },
  { name: "Videos", icon: "" },
  { name: "Subscribers", icon: "" },
  { name: "Subscriptions", icon: "" },
  { name: "Settings", icon: "" },
];

const MenuList = ({ onClick, onKeydown, anchor }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={onClick}
      onKeyDown={onKeydown}
    >
      <List>
        {menuList.map((menu, index) => (
          <ListItem key={menu.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
};

export default MenuList;
