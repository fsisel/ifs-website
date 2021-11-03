import React, { Component } from "react";
import Header from '../components/header_en'
import Footer from '../components/footer_en'

import logoDark from '../logos/ifs_logo_dark.svg'
import ptIcon from '../icons/pt.svg'
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
                        <a href="/en/about_us"><span>ABOUT US</span></a>
                        <a href="/en/sponsors"><span>SPONSORS</span></a>
                        <a href="/en/contacts"><span>CONTACTS</span></a>
                    </div>

                    <div id="header_language">
                        <a href="/pt" title="Português">
                            <img src={ ptIcon } alt="Portuguese" />
                        </a>
                    </div>
                </div>

                <img class="cover tall" src={ ifs01_1 } alt="IFS01" />

                <article>
                    <div class="container dual left">
                        <div class="text_wrapper">
                            <div>
                                <h2>We make high performance racing cars.</h2>
                                <p>We are a team of engineering students from Lisbon School of Engineering. Passionate about cars and technology, we design and build a racing car for the formula student competition.</p>
                                <a href="/en/about_us" class="parallelogram center">
                                    <div class="orange_detail"></div>
                                    <div class="text">ABOUT US</div>
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
                                <p>The IFS02 vehicle was the very first <b>electric</b> car designed and made by the team. The final result was a vehicle with a 80 kW electric motor and with a combined weight of 230 kg. This project achieved an excellent performance with low cost and easy maintenance.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container dual left">
                        <div class="text_wrapper">
                            <div>
                                <h2>IFS01</h2>
                                <p>Known for its durability and ease of improvement, the IFS01 vehicle was the first combustion car made by the team. It has a power of 40 kW and it weighs 250 kg.</p>
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
                                <div class="detail">NEW</div>
                                <div class="text">IFS03</div>
                            </div>
                            <div class="detail">COMING SOON</div>
                        </div>
                    </div>

                    

                </article>

                <Footer/>

            </div>
            
        )
    }

}
