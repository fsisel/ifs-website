import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import logoDark from '../logos/ifs_logo_dark.svg'
import enIcon from '../icons/en.svg'
import ifs02_2 from '../images/ifs02_2.jpg'
import ifs02_1 from '../images/ifs02_1.jpg'
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

                <img class="cover tall" src={ ifs02_2 } alt="IFS02" />

                <article>
                    <h1>ALTA PERFORMANCE<br/>100% ELÉTRICO</h1>

                    <div class="container dual left">
                        <div class="text_wrapper">
                            <div>
                                <h2>We make high performance racing cars.</h2>
                                <p>We are a team of engineering students from Lisbon School of Engineering. Passionate about cars and technology, we design and build a racing car for the formula student competition.</p>
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