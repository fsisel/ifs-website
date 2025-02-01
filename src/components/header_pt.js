import React from "react";
import { Link } from "react-router-dom";

import logo from '../logos/ifs_icon_dark.svg'
import enIcon from '../icons/en.svg'
import menuIcon from '../icons/menu.svg'

function HeaderPt() {

    let toggleMenu = () => {
        if (document.getElementById("navbar_menu").className === "") {
            document.getElementById("navbar_menu").className = "open"
            document.getElementById("menu_button").className = "open"
        }
        else {
            document.getElementById("navbar_menu").className = ""
            document.getElementById("menu_button").className = ""
        }
    }

    let handleLanguageChange = () => {
        let splitPath = window.location.pathname.split('/');
        return "/en/" + splitPath.slice(2, splitPath.length).join("/");
    }

    return (
        <div id="navbar">
            <div id="navbar_header">
                <Link className="logo" to="/pt">
                    <img src={logo} alt="ISEL Formula Student" />
                </Link>
                <span></span>
                <Link id="responsive_navbar_language" to="/en" title="English">
                    <img className="flag_icon" src={enIcon} alt="English" />
                </Link>
                <button id="menu_button" onClick={toggleMenu}>
                    MENU
                    <img src={menuIcon} alt="Menu" />
                </button>
            </div>


            <span></span>

            <div id="navbar_menu">
                <Link to="/pt/about_us">SOBRE NÓS&nbsp;</Link>
                <Link to="/pt/ifs04">IFS04&nbsp;</Link>
                <Link to="/pt/sponsors">PATROCINADORES&nbsp;</Link>
                <Link to="/pt/contacts">CONTACTOS&nbsp;</Link>
            </div>

            <Link id="navbar_language" to={handleLanguageChange} title="English">
                <img className="flag_icon" src={enIcon} alt="English" />
            </Link>
        </div>
    )

}

export default HeaderPt;