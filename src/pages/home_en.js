import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../components/header_en";
import Footer from "../components/footer_en";

import logoDark from "../logos/ifs_logo_dark.svg";
import ptIcon from "../icons/pt.svg";

import equipa3_fsa2023 from "../images/equipa3_fsa2023.webp";

import ifs01_2 from "../images/ifs01_2.webp";
import ifs02_1 from "../images/ifs02_1.webp";
import ifs02_2 from "../images/ifs02_2.webp";
import ifs03Front from "../images/ifs03_front_whitebg.webp";

export default class HomepageEn extends Component {
  render() {
    return (
      <div>
        <Header />

        <img
          className="cover tall"
          src={equipa3_fsa2023}
          alt="Team Formula Student Austria 2023"
        />

        <article>
          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2>We make high performance racing cars.</h2>
                <p>
                  We are a team of engineering students from Lisbon School of
                  Engineering. Passionate about cars and technology, we design
                  and build a racing car for the formula student competition.
                </p>
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

          <div className="container-fluid dual right">
            <div className="image_wrapper">
              <img src={ifs02_2} alt="IFS02" />
            </div>
            <div className="text_wrapper">
              <div>
                <h2>IFS05</h2>
                <p>Coming soon...</p>
              </div>
            </div>
          </div>

          <div className="product big">
            <img src={ifs03Front} alt="IFS03" />
            <div className="column">
              <div className="wrapper">
                <div className="detail">OUR LATEST</div>
                <div className="text">IFS04</div>
              </div>
              <div>
                <Link to="/en/ifs03" className="parallelogram center">
                  <div className="orange_detail"></div>
                  <div className="text">CHECK IT OUT</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2>IFS03</h2>

                <p>
                  The IFS03 vehicle was the successor to the IFS02, showcasing
                  the team’s advancements in electric car technology. It
                  delivered improved efficiency and performance.
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
                <h2>IFS02</h2>
                <p>
                  The IFS02 vehicle was the very first <b>electric</b> car
                  designed and made by the team. The final result was a vehicle
                  with a 80 kW electric motor and with a combined weight of 230
                  kg. This project achieved an excellent performance with low
                  cost and easy maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid dual left">
            <div className="text_wrapper">
              <div>
                <h2>IFS01</h2>
                <p>
                  Known for its durability and ease of improvement, the IFS01
                  vehicle was the first combustion car made by the team. It has
                  a power of 40 kW and it weighs 250 kg.
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
