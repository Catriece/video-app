import React, { useState, Fragment } from "react";
import MenuButton from "./Menu-Button.component";
import Drawer from "@mui/material/Drawer";
import MenuList from "./Menu-List.component";

export default function SideMenu() {
  const [state, setState] = useState({ left: false });
  const anchor = "left";

  // Ensures tab or shift key strokes doesn't open sidebar inadvertenly
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <MenuList
      onClick={toggleDrawer(anchor, false)}
      onKeydown={toggleDrawer(anchor, false)}
    />
  );

  return (
    <div>
      <Fragment key={anchor}>
        <MenuButton onClick={toggleDrawer(anchor, true)} />
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </Fragment>
    </div>
  );
}
