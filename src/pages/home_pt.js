import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import logoDark from '../logos/ifs_logo_dark.svg'
import enIcon from '../icons/en.svg'
import ifs01_1 from '../images/ifs01_1.webp'
import ifs01_2 from '../images/ifs01_2.webp'
import ifs02_1 from '../images/ifs02_1.webp'
import ifs02_2 from '../images/ifs02_2.webp'
import ifs03Front from '../images/ifs03_front.png'

export default class Homepage extends Component {
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        document.getElementById("navbar").style.top = "-4em"
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
      
    handleScroll = () => {
        if (document.body.clientWidth > 750) {
            if (window.scrollY > 180) {
                document.getElementById("navbar").style.top = "0"
            } else {
                document.getElementById("navbar").style.top = "-4em"
            }
        }
    };

    render() {
        return (
            <div>
                <Header/>

                <div id="header">
                    <img class="logo" src={ logoDark } alt="ISEL Formula Student" />
                    
                    <div id="header_menu">
                        <a href="/pt/about_us"><span>SOBRE NÓS</span></a>
                        <a href="/pt/ifs03"><span>IFS03</span></a>
                        <a href="/pt/sponsors"><span>PATROCINADORES</span></a>
                        <a href="/pt/contacts"><span>CONTACTOS</span></a>
                    </div>

                    <div id="header_language">
                        <a href="/en" title="English">
                            <img src={ enIcon } alt="English" />
                        </a>
                    </div>
                </div>

                <img class="cover tall" src={ ifs01_1 } alt="IFS01" />

                <article>

                    <div class="container dual left">
                        <div class="text_wrapper">
                            <div>
                                <h2>Construímos Veículos de Competição.</h2>
                                <p>A ISEL Formula Student é uma equipa constituída por alunos do Instituto Superior de Engenharia de Lisboa e tem a missão de projetar e manufaturar um veículo capaz de participar nas competições de Formula Student.</p>
                                <a href="/pt/about_us" class="parallelogram center">
                                    <div class="orange_detail"></div>
                                    <div class="text">SOBRE NÓS</div>
                                </a>
                            </div>
                        </div>
                        <div class="image_wrapper">
                            <img src={ ifs02_1 } alt="IFS02" />
                        </div>
                    </div>

                    <div class="container dual right">
                        <div class="image_wrapper">
                            <img src={ ifs02_2 } alt="IFS02" />
                        </div>
                        <div class="text_wrapper">
                            <div>
                                <h2>IFS02</h2>
                                <p>O  IFS02 foi o primeiro veículo <b>elétrico</b> pensado e manufaturado pela equipa. Como produto final obteve-se um veículo com uma potência de 80 kW e um peso de 230 kg, de baixo custo, excelente performance e de fácil manutenção.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container dual left">
                        <div class="text_wrapper">
                            <div>
                                <h2>IFS01</h2>
                                <p>Caracterizado pela sua durabilidade e capacidade de melhorias, o veículo IFS01, primeiro veículo a combustão projetado e manufaturado pela equipa, tem uma potência de 40 kW e um peso de 250 kg.</p>
                            </div>
                        </div>
                        <div class="image_wrapper">
                            <img src={ ifs01_2 } alt="IFS01" />
                        </div>
                    </div>

                    <div class="product big">
                        <img src={ifs03Front} alt="IFS03" />
                        <div class="column">
                            <div class="wrapper">
                                <div class="detail">NOVO</div>
                                <div class="text">IFS03</div>
                            </div>
                            <a href="/pt/ifs03" class="parallelogram">
                                <div class="orange_detail"></div>
                                <div class="text">SABER MAIS</div>
                            </a>
                        </div>
                    </div>

                </article>

                <Footer/>

            </div>
            
        )
    }

}