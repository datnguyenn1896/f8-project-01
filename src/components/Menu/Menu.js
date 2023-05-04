import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useState } from "react";
import Vietcombank from "../Bill/Vietcombank";
import "./Menu.scss";
const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="content">
      <Box
        sx={{
          maxWidth: 480,
          bgcolor: "background.paper",
          display: "flex",
        }}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Vietcombank" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="SeaBank" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Techcombank" />
          </ListItemButton>
        </List>
      </Box>
      {selectedIndex === 0 && <Vietcombank />}
    </div>
  );
};

export default Menu;
