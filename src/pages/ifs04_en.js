import React from "react";

import Header from "../components/header_en";
import Footer from "../components/footer_en";

import imageIfs04 from "../images/ifs04-lateral.webp";
import logoIfs04 from "../logos/Logo_IFS04_W.svg";

import imageIfs04Top from "../images/ifs04-up.webp";

import iconElectric from "../icons/electric.svg";
import iconPerformance from "../icons/performance.svg";
import iconAgility from "../icons/agility.svg";
import iconChassis from "../icons/chassis.svg";
import iconBody from "../icons/body.svg";
import iconSuspension from "../icons/suspension.svg";

import imageDrivetrain from "../images/drivetrain.webp";
import imageIfs04Back from "../images/ifs04-rear.webp";

function Ifs04En() {
  return (
    <div>
      <Header />

      <div id="black_container">
        <img id="cover" src={imageIfs04} alt="IFS04" />
        <img id="title" src={logoIfs04} alt="IFS04" />
      </div>

      <article>
        <div className="main_container">
          IFS04 is the latest fully electric vehicle developed by ISEL Formula
          Student.
          <br />
          <br />
          Designed with lightness and reliability in mind IFS04 strikes the
          perfect balance between performance and agility.
        </div>

        <div className="product_center">
          <img className="responsive" src={imageIfs04Top} alt="IFS04"/>
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
            <img className="large" src={imageIfs04Top} alt="IFS04" />
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
          <img src={imageDrivetrain} alt="IFS04 drivetrain" />
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
              <div className="text">215 kg</div>
            </div>
            <div className="wrapper">
              <div className="detail">0-100 KM/H</div>
              <div className="text">TBA</div>
            </div>
          </div>
          <img src={imageIfs04Back} alt="IFS04"/>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Ifs04En;
