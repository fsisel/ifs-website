import React from "react";

import Header from "../components/header_pt";
import Footer from "../components/footer_pt";

import imageIfs05 from "../images/ifs05-lateral.webp";
import logoIfs04 from "../logos/Logo_IFS04_W.svg";

import imageIfs05Top from "../images/ifs05-up.webp";

import iconElectric from "../icons/electric.svg";
import iconPerformance from "../icons/performance.svg";
import iconAgility from "../icons/agility.svg";
import iconChassis from "../icons/chassis.svg";
import iconBody from "../icons/body.svg";
import iconSuspension from "../icons/suspension.svg";

import imageDrivetrain from "../images/drivetrain.webp";
/* import imageIfs04Back from "../images/ifs04-rear.webp"; */
import imageIfs05Front from "../images/ifs05-front.webp";

function Ifs05Pt() {
  return (
    <div>
      <Header />

      <div id="black_container">
        <img id="cover" src={imageIfs05} alt="IFS05" />
        <img id="title" src={logoIfs04} alt="IFS05" />
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
          <img className="responsive" src={imageIfs05Top} alt="IFS05" />
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
            <img className="large" src={imageIfs05Top} alt="IFS05" />
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
          <img src={imageDrivetrain} alt="IFS05 drivetrain" />
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
              <div className="text">215 kg</div>
            </div>
            <div className="wrapper">
              <div className="detail">0-100 KM/H</div>
              <div className="text">TBA</div>
            </div>
          </div>
          <img src={imageIfs05Front} alt="IFS05" />
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default Ifs05Pt;
