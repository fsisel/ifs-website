import React, { Component } from "react";

import logo from '../logos/ifs_icon_dark.svg'
import ptIcon from '../icons/pt.svg'
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
                    <a class="logo" href="/en"><img src={ logo } alt="ISEL Formula Student"/></a>
                    <span></span>
                    <a id="responsive_navbar_language" href="/pt" title="Português">
                        <img class="flag_icon" src={ ptIcon } alt="Portuguese" />
                    </a>
                    <button id="menu_button" onClick={this.toggleMenu}>
                        MENU
                        <img src={ menuIcon } alt="Menu" />
                    </button>
                </div>


                <span></span>
                
                <div id="navbar_menu">
                    <a href="/en/about_us">ABOUT US&nbsp;</a>
                    <a href="/en/ifs03">IFS03&nbsp;</a>
                    <a href="/en/sponsors">SPONSORS&nbsp;</a>
                    <a href="/en/contacts">CONTACTS&nbsp;</a>
                </div>

                <a id="navbar_language" href="/pt" title="Português">
                    <img class="flag_icon" src={ ptIcon } alt="Portuguese" />
                </a>
            </div>
        )
    }

}