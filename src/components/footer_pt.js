import React, { Component } from "react";

import linkedinIcon from '../icons/linkedin.svg'
import instagramIcon from '../icons/instagram.svg'
import facebookIcon from '../icons/facebook.svg'
import twitterIcon from '../icons/twitter.svg'

export default class Footer extends Component {
    
    componentDidMount() {new Date().getFullYear()
        document.getElementById("year").innerHTML = new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <div id="footer_container">
                    <div>&copy; <span id="year"></span> ISEL FS - Associação de Estudantes de Engenharia</div>
                    <span class="separator"></span>
                    <a id="footer_privacypolicy" class="link" href="/pt/privacy_policy">Política de Privacidade</a>
                </div>

                <div id="social_buttons">
                    <a href="https://www.linkedin.com/company/isel-formula-student/" target="_blank" rel="noopener noreferrer"><img src={ linkedinIcon } alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/isel.formulastudent/" target="_blank" rel="noopener noreferrer"><img src={ instagramIcon } alt="Instagram" /></a>
                    <a href="https://www.facebook.com/IselFormulaStudent" target="_blank" rel="noopener noreferrer"><img src={ facebookIcon } alt="Facebook" /></a>
                    <a href="https://twitter.com/isel_fs" target="_blank" rel="noopener noreferrer"><img src={ twitterIcon } alt="Twitter" /></a>
                </div>
            </footer>
        )
    }

}