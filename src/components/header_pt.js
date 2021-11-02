import React, { Component } from "react";

import logo from '../logos/ifs_icon_dark.svg'
import enIcon from '../icons/en.svg'
import menuIcon from '../icons/menu.svg'

export default class Header extends Component {

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

    render() {
        return (
            <div id="navbar">
                <div id="navbar_header">
                    <a class="logo" href="/pt"><img src={ logo } alt="ISEL Formula Student"/></a>
                    <span></span>
                    <a id="responsive_navbar_language" href="/en" title="English">
                        <img class="flag_icon" src={ enIcon } alt="English" />
                    </a>
                    <button id="menu_button" onClick={this.toggleMenu}>
                        MENU
                        <img src={ menuIcon } alt="Menu" />
                    </button>
                </div>


                <span></span>
                
                <div id="navbar_menu">
                    <a href="/pt/about_us">SOBRE NÓS&nbsp;</a>
                    <a href="/pt/sponsors">PATROCINADORES&nbsp;</a>
                    <a href="/pt/contacts">CONTACTOS&nbsp;</a>
                </div>

                <a id="navbar_language" href="/en" title="English">
                    <img class="flag_icon" src={ enIcon } alt="English" />
                </a>
            </div>
        )
    }

}