import React from "react";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import equipa_ifs from "../images/equipa3_fsa2023.webp";
import imageIfs02_1 from '../images/ifs02_1.webp'
import imageFsg_teams from '../images/fsg_teams.webp'

function AboutUsEn() {

    return (
      <div>
        <Header />

        <img
          className="cover"
          src={equipa_ifs}
          alt="ISEL Formula Student Team"
        />

        <article>
          <h1>ABOUT US</h1>

          <div className="container dual right">
            <div className="image_wrapper">
              <img src={imageFsg_teams} alt="Formula Student Competition" />
            </div>
            <div className="text_wrapper">
              <div>
                <h2>The Competition</h2>
                <p>
                  Formula Student is an engineering competition held annually in
                  several countries. Student teams from around the world design,
                  build, test, and race a small-scale formula style racing car.
                  The cars are judged on a few criteria. There are dynamics and
                  statics events. Each one measures the characteristics of the
                  vehicle such as endurance, cost or engineering design, inter
                  alia.
                </p>
              </div>
            </div>
          </div>

          <div className="container dual left">
            <div className="text_wrapper">
              <div>
                <h2>The Project</h2>
                <p>
                  This project, in addition to improving our engineering skills
                  above the content learnt in the lectures, also helps us gain
                  soft skills, such as time and resource management, public
                  speaking and teamwork. Furthermore, it helps creating
                  professional opportunities for the students.
                </p>

                <p>
                  The team currently has three cars: IFS01 (combustion), IFS02
                  and IFS03 (electric). We are now progressing in the
                  development of electric cars with the new model, the IFS04,
                  whose aim is to improve on the performance achieved by our
                  previous car.
                </p>
              </div>
            </div>
            <div className="image_wrapper">
              <img src={imageIfs02_1} alt="IFS02" />
            </div>
          </div>

          <div className="container">
            <div className="text_wrapper">
              <h2>History</h2>
              <p>
                ISEL Formula Student was founded in 2013. Initially it was made
                up of just 7 members, but it has been growing.
              </p>

              <p>
                Initially there were only seven members, but this number has
                grown since then.
              </p>

              <p>
                We currently have around 50 students taking part in the project,
                from all ISEL courses.
              </p>
              <p>
                In 2013-2014 the team began designing the IFS01 car. It is a
                combustion vehicle whose main features are its lightness, safety
                and simplicity. In 2014, the team took part in the Silverstone
                competition in class 2, project class, where they finished in
                third place.
              </p>
              <p>
                In 2014-2015, began the process of manufacturing the IFS0, which
                competed in Barcelona. In that same competition the vehicle was
                highlighted as the best car among the teams with only one year.
              </p>

              <p>
                The 2015-2016 season was the time to improve the IFS01 vehicle
                with the IFS01 EVO project
              </p>

              <p>
                With ambition ever present, in 2016-2017 the team started a new
                project, the IFS02, the team's first electric vehicle. The team
                took part in the competition in the Czech Republic in 2017 with
                the IFS01 evo, with a better performance.
              </p>
              <p>
                In 2017-2018, the team competed in Barcelona with the IFS02
                prototype and in the 2018-2019 season, with the vehicle already
                manufactured, the team took part in the Formula Student
                competition in Germany.
              </p>
              <p>
                The 2019-2020 season was atypical, with the team competing in
                Formula Student UK, in class 2, finishing 4th in the Business
                competition with the IFS03 prototype vehicle.
              </p>
              <p>
                During the 2020-2021 season, it was not possible to hold
                competitions due to COVID-19. The team continued to carry out
                all the tasks necessary to perform well in the future.
              </p>
              <p>
                In the 2021-2022 season, the team again took part in the Formula
                Student Spain competition in Barcelona with IFS03.
              </p>
              <p>
                In 2022-2023 the team competed for the first time, with its
                IFS03 car, in the FS Austria competition at the Red Bull Ring in
                Spielberg and in FS Portugal at the Kartódromo de Castelo
                Branco.
              </p>
              <p>
                This season, 2023-2024, the team has started to develop its
                third electric vehicle, the IFS04, and will once again go to the
                FS Spain and FS Portugal competitions, presenting the IFS04 to
                the public with a rollout.
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
}

export default AboutUsEn;