import React from "react";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import imageIfs03 from '../images/ifs03_1.webp'
import logoIfs03 from '../logos/ifs03_dark.svg'

import imageIfs03Top from '../images/ifs03_top.webp'

import iconElectric from '../icons/electric.svg'
import iconPerformance from '../icons/performance.svg'
import iconAgility from '../icons/agility.svg'
import iconChassis from '../icons/chassis.svg'
import iconBody from '../icons/body.svg'
import iconSuspension from '../icons/suspension.svg'

import imageDrivetrain from '../images/drivetrain.webp'
import imageIfs03Back from '../images/ifs03_back.webp'

function Ifs03En() {

    return (
        <div>

            <Header />

            <div id="black_container">
                <img id="cover" src={imageIfs03} alt="IFS03" />
                <img id="title" src={logoIfs03} alt="IFS03" />
            </div>

            <article>

                <div className="main_container">
                    IFS03 is the latest fully electric vehicle developed by ISEL Formula Student.<br /><br />
                    Designed with lightness and reliability in mind IFS03 strikes the perfect balance between performance and agility.
                </div>

                <div className="product_center">
                    <img className="responsive" src={imageIfs03Top} alt="IFS03" />
                    <div>
                        <div className="column left">
                            <div className="wrapper">
                                <div>100% Electric</div>
                                <img className="icon" src={iconElectric} alt="electric" />
                            </div>
                            <div className="wrapper">
                                <div>High Performance</div>
                                <img className="icon" src={iconPerformance} alt="performance" />
                            </div>
                            <div className="wrapper">
                                <div>Maximum Agility</div>
                                <img className="icon" src={iconAgility} alt="agility" />
                            </div>
                        </div>
                        <img className="large" src={imageIfs03Top} alt="IFS03" />
                        <div className="column">
                            <div className="wrapper">
                                <img className="icon" src={iconChassis} alt="chassis" />
                                <div>Tubular Space Frame Chassis</div>
                            </div>
                            <div className="wrapper">
                                <img className="icon" src={iconBody} alt="body" />
                                <div>Carbon Fiber Body</div>
                            </div>
                            <div className="wrapper">
                                <img className="icon" src={iconSuspension} alt="suspension" />
                                <div>Pneumatic Suspension</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product">
                    <img src={imageDrivetrain} alt="IFS03 drivetrain" />
                    <div className="column">
                        <div className="wrapper">
                            <div className="detail">POWER</div>
                            <div className="text">80 kW (107 cv)</div>
                        </div>
                        <div className="wrapper">
                            <div className="detail">TORQUE</div>
                            <div className="text">240 Nm</div>
                        </div>
                    </div>
                </div>

                <div className="product right">
                    <div className="column">
                        <div className="wrapper">
                            <div className="detail">WEIGHT</div>
                            <div className="text">230 kg</div>
                        </div>
                        <div className="wrapper">
                            <div className="detail">0-100 KM/H</div>
                            <div className="text">TBA</div>
                        </div>
                    </div>
                    <img src={imageIfs03Back} alt="IFS03" />
                </div>

            </article>

            <Footer />

        </div>
    )

}

export default Ifs03En;