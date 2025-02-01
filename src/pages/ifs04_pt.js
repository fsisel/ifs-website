import React from "react";

import Header from "../components/header_pt";
import Footer from "../components/footer_pt";

import imageIfs03 from "../images/ifs03_1.webp";
import logoIfs04 from "../logos/Logo_IFS04_W.svg";

import imageIfs03Top from "../images/ifs03_top.webp";

import iconElectric from "../icons/electric.svg";
import iconPerformance from "../icons/performance.svg";
import iconAgility from "../icons/agility.svg";
import iconChassis from "../icons/chassis.svg";
import iconBody from "../icons/body.svg";
import iconSuspension from "../icons/suspension.svg";

import imageDrivetrain from "../images/drivetrain.webp";
import imageIfs03Back from "../images/ifs03_back.webp";

function Ifs04Pt() {
  return (
    <div>
      <Header />

      <div id="black_container">
        <img id="cover" src={imageIfs03} alt="IFS04" />
        <img id="title" src={logoIfs04} alt="IFS04" />
      </div>

      <article>
        <div className="main_container">
          O IFS04 é o último veículo elétrico desenvolvido pela equipa ISEL
          Formula Student.
          <br />
          <br />
          Projetado a pensar no peso reduzido e fiabilidade, o IFS04 atinge o
          equilíbrio perfeito entre desempenho e agilidade.
        </div>

        <div className="product_center">
          <img className="responsive" src={imageIfs03Top} alt="IFS04" />
          <div>
            <div className="column left">
              <div className="wrapper">
                <div>100% Elétrico</div>
                <img className="icon" src={iconElectric} alt="electric" />
              </div>
              <div className="wrapper">
                <div>Alto Desempenho</div>
                <img className="icon" src={iconPerformance} alt="performance" />
              </div>
              <div className="wrapper">
                <div>Máxima Agilidade</div>
                <img className="icon" src={iconAgility} alt="agility" />
              </div>
            </div>
            <img className="large" src={imageIfs03Top} alt="IFS03" />
            <div className="column">
              <div className="wrapper">
                <img className="icon" src={iconChassis} alt="chassis" />
                <div>Chassis Tubular</div>
              </div>
              <div className="wrapper">
                <img className="icon" src={iconBody} alt="body" />
                <div>Body em Fibra de Carbono</div>
              </div>
              <div className="wrapper">
                <img className="icon" src={iconSuspension} alt="suspension" />
                <div>Suspensão Pneumática</div>
              </div>
            </div>
          </div>
        </div>

        <div className="product">
          <img src={imageDrivetrain} alt="IFS04 drivetrain" />
          <div className="column">
            <div className="wrapper">
              <div className="detail">POTÊNCIA</div>
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
              <div className="detail">PESO</div>
              <div className="text">230 kg</div>
            </div>
            <div className="wrapper">
              <div className="detail">0-100 KM/H</div>
              <div className="text">TBA</div>
            </div>
          </div>
          <img src={imageIfs03Back} alt="IFS04" />
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Ifs04Pt;
