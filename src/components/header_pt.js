import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../logos/ifs_icon_dark.svg'
import enIcon from '../icons/en.svg'
import menuIcon from '../icons/menu.svg'

export default class HeaderPt extends Component {

    toggleMenu() {
        if (document.getElementById("navbar_menu").className === "") {
            document.getElementById("navbar_menu").className = "open"
            document.getElementById("menu_button").className = "open"
        }
        else {
            document.getElementById("navbar_menu").className = ""
            document.getElementById("menu_button").className = ""
        }
    }

    handleLanguageChange() {
        let splitPath = window.location.pathname.split('/');
        return "/en/" + splitPath.slice(2, splitPath.length).join("/");
    }

    render() {

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
                    <button id="menu_button" onClick={this.toggleMenu}>
                        MENU
                        <img src={menuIcon} alt="Menu" />
                    </button>
                </div>


                <span></span>

                <div id="navbar_menu">
                    <Link to="/pt/about_us">SOBRE NÓS&nbsp;</Link>
                    <Link to="/pt/ifs03">IFS03&nbsp;</Link>
                    <Link to="/pt/sponsors">PATROCINADORES&nbsp;</Link>
                    <Link to="/pt/contacts">CONTACTOS&nbsp;</Link>
                </div>

                <Link id="navbar_language" to={this.handleLanguageChange} title="English">
                    <img className="flag_icon" src={enIcon} alt="English" />
                </Link>
            </div>
        )
    }

}