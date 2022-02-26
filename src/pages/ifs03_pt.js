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

                <Header />

                <div id="black_container">
                    <img id="cover" src={imageIfs03} alt="IFS03" />
                    <img id="title" src={logoIfs03} alt="IFS03" />
                </div>

                <article>

                    <div class="main_container">
                        O IFS03 é o último veículo elétrico desenvolvido pela equipa ISEL Formula Student.<br /><br />
                        Projetado a pensar no peso reduzido e fiabilidade, o IFS03 atinge o equilíbrio perfeito entre desempenho e agilidade.
                    </div>

                    <div class="product_center">
                        <img class="responsive" src={imageIfs03Top} alt="IFS03" />
                        <div>
                            <div class="column left">
                                <div class="wrapper">
                                    <div>100% Elétrico</div>
                                    <img class="icon" src={iconElectric} alt="electric" />
                                </div>
                                <div class="wrapper">
                                    <div>Alto Desempenho</div>
                                    <img class="icon"src={iconPerformance} alt="performance" />
                                </div>
                                <div class="wrapper">
                                    <div>Máxima Agilidade</div>
                                    <img class="icon"src={iconAgility} alt="agility" />
                                </div>
                            </div>
                            <img class="large" src={imageIfs03Top} alt="IFS03" />
                            <div class="column">
                                <div class="wrapper">
                                    <img class="icon"src={iconChassis} alt="chassis" />
                                    <div>Chassis Tubular</div>
                                </div>
                                <div class="wrapper">
                                    <img class="icon"src={iconBody} alt="body" />
                                    <div>Body em Fibra de Carbono</div>
                                </div>
                                <div class="wrapper">
                                    <img class="icon"src={iconSuspension} alt="suspension" />
                                    <div>Suspensão Pneumática</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product">
                        <img src={imageDrivetrain} alt="IFS03 drivetrain" />
                        <div class="column">
                            <div class="wrapper">
                                <div class="detail">POTÊNCIA</div>
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
                                <div class="detail">PESO</div>
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

                <Footer />

            </div>
        )
    }

}
