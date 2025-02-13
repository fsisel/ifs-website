import React from "react";
import { Link } from "react-router-dom";

import logo from "../logos/ifs_icon_dark.svg";
import ptIcon from "../icons/pt.svg";
import menuIcon from "../icons/menu.svg";

function HeaderEn() {
  let toggleMenu = () => {
    if (document.getElementById("navbar_menu").className === "") {
      document.getElementById("navbar_menu").className = "open";
      document.getElementById("menu_button").className = "open";
    } else {
      document.getElementById("navbar_menu").className = "";
      document.getElementById("menu_button").className = "";
    }
  };

  let handleLanguageChange = () => {
    let splitPath = window.location.pathname.split("/");
    return "/pt/" + splitPath.slice(2, splitPath.length).join("/");
  };

  return (
    <div id="navbar">
      <div id="navbar_header">
        <Link className="logo" to="/en">
          <img src={logo} alt="ISEL Formula Student" />
        </Link>
        <span></span>
        <Link id="responsive_navbar_language" to="/pt" title="Português">
          <img className="flag_icon" src={ptIcon} alt="Portuguese" />
        </Link>
        <button id="menu_button" onClick={toggleMenu}>
          MENU
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>

      <span></span>

      <div id="navbar_menu">
        <Link to="/en/about_us">ABOUT US&nbsp;</Link>
        <Link to="/en/ifs04">IFS04&nbsp;</Link>
        <Link to="/en/sponsors">SPONSORS&nbsp;</Link>
        <Link to="/en/contacts">CONTACTS&nbsp;</Link>
      </div>

      <Link id="navbar_language" to={handleLanguageChange} title="Português">
        <img className="flag_icon" src={ptIcon} alt="Portuguese" />
      </Link>
    </div>
  );
}

export default HeaderEn;
