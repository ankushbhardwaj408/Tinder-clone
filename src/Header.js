import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
function header() {
  return (
    <div className="header">
      <IconButton >
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img
        className="header__logo"
        src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png"
        alt=""
      ></img>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default header;
