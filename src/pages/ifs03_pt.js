import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import imageIfs03 from '../images/ifs03_1.png'
import logoIfs03 from '../logos/ifs03_dark.svg'

import imageIfs03Top from '../images/ifs03_top.png'

import iconElectric from '../icons/electric.svg'
import iconPerformance from '../icons/performance.svg'
import iconAgility from '../icons/agility.svg'
import iconChassis from '../icons/chassis.svg'
import iconBody from '../icons/body.svg'
import iconSuspension from '../icons/suspension.svg'

import imageDrivetrain from '../images/drivetrain.png'
import imageIfs03Back from '../images/ifs03_back.png'

export default class Ifs03En extends Component {

    render() {
        return (
            <div>

            <Header/>

            <div id="black_container">
                <img id="cover" src={imageIfs03} alt="IFS03" />
                <img id="title" src={logoIfs03} alt="IFS03" />                
            </div>

            <article>

                <div class="main_container">
                    O IFS03 é o último veículo elétrico desenvolvido pela equipa ISEL Formula Student.<br/><br/>
                    Projetado a pensar na leveza e fiabilidade, o IFS03 atinge o equilíbrio perfeito entre performance e agilidade.
                </div>
               
                <div class="product_center">
                    <img class="responsive" src={imageIfs03Top} alt="IFS03" />
                    <div>
                        <div class="column left">
                            <div class="wrapper">
                                <div>100% Electric</div>
                                <img src={iconElectric} alt="electric" />
                            </div>
                            <div class="wrapper">
                                <div>High Performance</div>
                                <img src={iconPerformance} alt="performance" />
                            </div>
                            <div class="wrapper">
                                <div>Maximum Agility</div>
                                <img src={iconAgility} alt="agility" />
                            </div>
                        </div>
                        <img class="large" src={imageIfs03Top} alt="IFS03" />
                        <div class="column">
                            <div class="wrapper">
                                <img src={iconChassis} alt="chassis" />
                                <div>Tubular Space Frame Chassis</div>
                            </div>
                            <div class="wrapper">
                                <img src={iconBody} alt="body" />
                                <div>Carbon Fiber Body</div>
                            </div>
                            <div class="wrapper">
                                <img src={iconSuspension} alt="suspension" />
                                <div>Air Suspension</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="product">
                    <img src={imageDrivetrain} alt="IFS03 drivetrain" />
                    <div class="column">
                        <div class="wrapper">
                            <div class="detail">POWER</div>
                            <div class="text">80 kW (107 cv)</div>
                        </div>
                        <div class="wrapper">
                            <div class="detail">TORQUE</div>
                            <div class="text">240 Nm</div>
                        </div>
                    </div>
                </div>

                <div class="product right">
                    <div class="column">
                        <div class="wrapper">
                            <div class="detail">WEIGHT</div>
                            <div class="text">230 kg</div>
                        </div>
                        <div class="wrapper">
                            <div class="detail">0-100 KM/H</div>
                            <div class="text">TBA</div>
                        </div>
                    </div>
                    <img src={imageIfs03Back} alt="IFS03" />
                </div>
                
            </article>

            <Footer/>

            </div>
        )
    }
    
}