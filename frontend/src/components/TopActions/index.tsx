/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Avatar,
  Badge,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLocalStorage } from "../../utils/local-storage.utils";

function TopActions() {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setUser(getLocalStorage("user"));
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [_anchorNotf, setAnchorNotf] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickNotf = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNotf(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  function getUserInitials(userLogged: any) {

    if (userLogged) {
      const nameArray = userLogged.split(" ");

      if (nameArray.length > 1) {
        const firstName = nameArray[0];
        const lastName = nameArray[nameArray.length - 1];
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
      } else {

        const firstName = nameArray[0];
        return firstName.charAt(0).toUpperCase();
      }
    }
    return "---";
  }

  const initials = getUserInitials(user?.name);
  const navigate = useNavigate();
  const redirectLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("unexpectedError");
    navigate("/");
    toast.success("Usuário deslogado", {
      style: { width: "350px", height: "23px" },
    });
  };

  return (
    <>

      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="delete"
          sx={{ height: 40, width: 40 }}
          onClick={handleClickNotf}
        >

        </IconButton>

        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, cursor: "pointer" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              style={{
                border: "3px solid #D1E7F7",
                background: "#061121",
                padding: 23,
              }}
            >
              {initials}
            </Avatar>
          </Badge>
        </IconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          sx={{
            "&:hover": {
              backgroundColor: "inherit",
              cursor: "auto",
            },
            margin: "0 6px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              style={{
                background: "#0B2B25",
                padding: 20,
              }}
            >
              {initials}
            </Avatar>
            <div>
              <p style={{ color: "#17876D", fontWeight: "bold" }}>
                {user?.name}
              </p>
              <small style={{ color: "#17876D" }}>{user?.profile}</small>
              <br />
              <small style={{ color: "#17876D" }}>{user?.email}</small>

            </div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => redirectLogout()}
          sx={{
            margin: "0 6px",
          }}
        >
          <ListItemIcon
            sx={{
              "&.MuiListItemIcon-root": {
                minWidth: "24px",
              },
            }}
          >
            {/* <LogOut size={'20'} /> */}
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}

export default TopActions;
