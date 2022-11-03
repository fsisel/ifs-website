import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import logoDark from '../logos/ifs_logo_dark.svg'
import ptIcon from '../icons/pt.svg'

import equipa_fss2022 from '../images/equipa_fss2022.jpg'

import ifs01_2 from '../images/ifs01_2.webp'
import ifs02_1 from '../images/ifs02_1.webp'
import ifs02_2 from '../images/ifs02_2.webp'
import ifs03Front from '../images/ifs03_front_whitebg.png'

export default class HomepageEn extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        document.getElementById("navbar").style.top = "-4em"
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.location.pathname === "/en" || window.location.pathname === "/") {
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
                        <Link to="/en/about_us"><span>ABOUT US</span></Link>
                        <Link to="/en/ifs03"><span>IFS03</span></Link>
                        <Link to="/en/sponsors"><span>SPONSORS</span></Link>
                        <Link to="/en/contacts"><span>CONTACTS</span></Link>
                    </div>

                    <div id="header_language">
                        <Link to="/pt" title="Português">
                            <img src={ptIcon} alt="Portuguese" />
                        </Link>
                    </div>
                </div>

                <img className="cover tall" src={equipa_fss2022} alt="Team Formula Student Spain 2022" />

                <article>
                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>We make high performance racing cars.</h2>
                                <p>We are a team of engineering students from Lisbon School of Engineering. Passionate about cars and technology, we design and build a racing car for the formula student competition.</p>
                                <Link to="/en/about_us" className="parallelogram center">
                                    <div className="orange_detail"></div>
                                    <div className="text">ABOUT US</div>
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
                                <p>The IFS02 vehicle was the very first <b>electric</b> car designed and made by the team. The final result was a vehicle with a 80 kW electric motor and with a combined weight of 230 kg. This project achieved an excellent performance with low cost and easy maintenance.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>IFS01</h2>
                                <p>Known for its durability and ease of improvement, the IFS01 vehicle was the first combustion car made by the team. It has a power of 40 kW and it weighs 250 kg.</p>
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
                                <div className="detail">NEW</div>
                                <div className="text">IFS03</div>
                            </div>
                            <div>
                                <Link to="/en/ifs03" className="parallelogram center">
                                    <div className="orange_detail"></div>
                                    <div className="text">CHECK IT OUT</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>

        )
    }

}
