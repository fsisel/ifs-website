import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header_pt";
import Footer from "../components/footer_pt";

import equipa3_fspt2024 from "../images/Team04_fspt_1-1.webp";

import ifs01_2 from "../images/ifs01_2.webp";
import ifs02_1 from "../images/ifs02_1.webp";
import ifs02_2 from "../images/ifs02_2.webp";
import ifs03Front from "../images/ifs03_front_whitebg.webp";
import ifs04 from "../images/ifs04-main.webp";
import ifs05 from "../images/ifs05_1.webp";

export default class HomepagePt extends Component {
  render() {
    return (
      <div>
        <Header />

        <img
          className="cover tall"
          src={equipa3_fspt2024}
          alt="Equipa FSPT 2024"
        />

        <article>
          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2><b>Construímos Veículos de Competição.</b></h2>
                <p>
                  A ISEL Formula Student é uma equipa constituída por alunos do
                  Instituto Superior de Engenharia de Lisboa e tem a missão de
                  projetar e manufaturar um veículo capaz de participar nas
                  competições de Formula Student.
                </p>
                <Link to="/pt/about_us" className="parallelogram center">
                  <div className="orange_detail"></div>
                  <div className="text">SOBRE NÓS</div>
                </Link>
              </div>
            </div>
            <div className="image_wrapper">
              <img src={ifs02_1} alt="IFS02" />
            </div>
          </div>

          <div className="container-fluid dual right">
            <div className="image_wrapper">
              <img src={ifs05} alt="IFS05" />
            </div>
            <div className="text_wrapper">
              <div>
                <h2><b>IFS05</b></h2>
                <p>Em breve...</p>
              </div>
            </div>
          </div>

          <div className="product big">
            <img src={ifs04} alt="IFS04" />
            <div className="column">
              <div className="wrapper">
                <div className="detail">O ÚLTIMO</div>
                <div className="text">IFS04</div>
              </div>
              <Link to="/pt/ifs03" className="parallelogram center">
                <div className="orange_detail"></div>
                <div className="text">SABE MAIS</div>
              </Link>
            </div>
          </div>

          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2><b>IFS03</b></h2>
                <p>
                  O veículo IFS03 foi o sucessor do IFS02, apresentando os
                  avanços da equipa na tecnologia de automóveis eléctricos.
                  Proporcionou uma maior eficiência e desempenho.
                </p>
              </div>
            </div>
            <div className="image_wrapper">
              <img src={ifs03Front} alt="IFS03" />
            </div>
          </div>

          <div className="container-fluid dual right">
            <div className="image_wrapper">
              <img src={ifs02_2} alt="IFS02" />
            </div>
            <div className="text_wrapper">
              <div>
                <h2><b>IFS02</b></h2>
                <p>
                  O IFS02 foi o primeiro veículo <b>elétrico</b> pensado e
                  manufaturado pela equipa. Como produto final obteve-se um
                  veículo com uma potência de 80 kW e um peso de 230 kg, de
                  baixo custo, excelente performance e de fácil manutenção.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2><b>IFS01</b></h2>
                <p>
                  Caracterizado pela sua durabilidade e capacidade de melhorias,
                  o veículo IFS01, primeiro veículo a combustão projetado e
                  manufaturado pela equipa, tem uma potência de 40 kW e um peso
                  de 250 kg.
                </p>
              </div>
            </div>
            <div className="image_wrapper">
              <img src={ifs01_2} alt="IFS01" />
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }
}
