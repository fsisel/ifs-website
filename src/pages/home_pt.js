import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import logoDark from '../logos/ifs_logo_dark.svg'
import enIcon from '../icons/en.svg'

import equipa3_fsa2023 from "../images/equipa3_fsa2023.webp";

import ifs01_2 from '../images/ifs01_2.webp'
import ifs02_1 from '../images/ifs02_1.webp'
import ifs02_2 from '../images/ifs02_2.webp'
import ifs03Front from '../images/ifs03_front_whitebg.webp'

export default class HomepagePt extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        document.getElementById("navbar").style.top = "-4em"
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.location.pathname === "/pt" || window.location.pathname === "/") {
            if (document.body.clientWidth > 750) {
                if (window.scrollY > 180) {
                    document.getElementById("navbar").style.top = "0"
                } else {
                    document.getElementById("navbar").style.top = "-4em"
                }
            }
        } else {
            document.getElementById("navbar").style.top = "0"
        }
    };

    render() {
        return (
            <div>
                <Header />

                <div id="header">
                    <img className="logo" src={logoDark} alt="ISEL Formula Student" />
                    <div id="header_menu">
                        <Link to="/pt/about_us" ><span>SOBRE NÓS</span></Link>
                        <Link to="/pt/ifs03"><span>IFS03</span></Link>
                        <Link to="/pt/sponsors"><span>PATROCINADORES</span></Link>
                        <Link to="/pt/contacts"><span>CONTACTOS</span></Link>
                    </div>

                    <div id="header_language">
                        <Link to="/en" title="English">
                            <img src={enIcon} alt="English" />
                        </Link>
                    </div>
                </div>

                <img className="cover tall" src={equipa3_fsa2023} alt="Equipa Formula Student Austria 2023" />

                <article>

                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>Construímos Veículos de Competição.</h2>
                                <p>A ISEL Formula Student é uma equipa constituída por alunos do Instituto Superior de Engenharia de Lisboa e tem a missão de projetar e manufaturar um veículo capaz de participar nas competições de Formula Student.</p>
                                <Link to="/pt/about_us" className="parallelogram center">
                                    <div className="orange_detail"></div>
                                    <div className="text">SOBRE NÓS</div>
                                </Link>
                            </div>
                        </div>
                        <div className="image_wrapper">
                            <img src={ifs02_1} alt="IFS02" />
                        </div>
                    </div>

                    <div className="container dual right">
                        <div className="image_wrapper">
                            <img src={ifs02_2} alt="IFS02" />
                        </div>
                        <div className="text_wrapper">
                            <div>
                                <h2>IFS02</h2>
                                <p>O  IFS02 foi o primeiro veículo <b>elétrico</b> pensado e manufaturado pela equipa. Como produto final obteve-se um veículo com uma potência de 80 kW e um peso de 230 kg, de baixo custo, excelente performance e de fácil manutenção.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>IFS01</h2>
                                <p>Caracterizado pela sua durabilidade e capacidade de melhorias, o veículo IFS01, primeiro veículo a combustão projetado e manufaturado pela equipa, tem uma potência de 40 kW e um peso de 250 kg.</p>
                            </div>
                        </div>
                        <div className="image_wrapper">
                            <img src={ifs01_2} alt="IFS01" />
                        </div>
                    </div>

                    <div className="product big">
                        <img src={ifs03Front} alt="IFS03" />
                        <div className="column">
                            <div className="wrapper">
                                <div className="detail">NOVO</div>
                                <div className="text">IFS03</div>
                            </div>
                            <Link to="/pt/ifs03" className="parallelogram center">
                                <div className="orange_detail"></div>
                                <div className="text">SABE MAIS</div>
                            </Link>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>

        )
    }

}