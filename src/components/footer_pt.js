import React, { Component } from "react";
import { Link } from "react-router-dom";

import linkedinIcon from '../icons/linkedin.svg'
import instagramIcon from '../icons/instagram.svg'
import facebookIcon from '../icons/facebook.svg'

export default class Footer extends Component {

    componentDidMount() {
        new Date().getFullYear()
        document.getElementById("year").innerHTML = new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <div id="footer_container">
                    <div>&copy; <span id="year"></span> ISEL FS - Associação de Estudantes de Engenharia</div>
                    <span className="separator"></span>
                    <Link id="footer_privacypolicy" className="link" to="/pt/privacy_policy">Política de Privacidade</Link>
                </div>

                <div id="social_buttons">
                    <a href="https://www.linkedin.com/company/isel-formula-student/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/isel.formulastudent/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
                    <a href="https://www.facebook.com/IselFormulaStudent" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a>
                </div>
            </footer>
        )
    }

}