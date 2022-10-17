import React from "react";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import imageIfsTeam from '../images/ifs_team.webp'
import imageIfs02_1 from '../images/ifs02_1.webp'
import imageFsg_teams from '../images/fsg_teams.webp'
import equipa_ifs from '../images/equipa2_fss2022.jpg'

function AboutUsEn() {

            return (
            <div>

                <Header />

                <img className="cover" src={equipa_ifs} alt="ISEL Formula Student Team" />

                <article>

                    <h1>ABOUT US</h1>

                    <div className="container dual right">
                        <div className="image_wrapper">
                            <img src={imageFsg_teams} alt="Formula Student Competition" />
                        </div>
                        <div className="text_wrapper">
                            <div>
                                <h2>The Competition</h2>
                                <p>Formula Student is an engineering competition held annually in several countries. Student teams from around the world design, build, test, and race a small-scale formula style racing car. The cars are judged on a few criteria. There are dynamics and statics events. Each one measures the characteristics of the vehicle such as endurance, cost or engineering design, inter alia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>The Project</h2>
                                <p>This project, in addition to improving our engineering skills above the content learnt in the lectures, also helps us gain soft skills, such as time and resource management, public speaking and teamwork. Furthermore, it helps creating professional opportunities for the students.</p>

                                <p>This year the team is producing IFS03, an electric car which goal is to improve the performance achieved by IFS02.</p>
                            </div>
                        </div>
                        <div className="image_wrapper">
                            <img src={imageIfs02_1} alt="IFS02" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text_wrapper">
                            <h2>History</h2>
                            <p>ISEL Formula Student team was founded in 2013. It started with just 7 members, but it has been expanding. There are currently over 50 students from every degree of the institute.</p>

                            <p>In 2013-2014 the team started the design of IFS01. A combustion vehicle concept developed with lightness, reliability and simplicity as its main characteristics. The team participated in the 2014 Silverstone competition in class 2, project class, where it finished in third place.</p>

                            <p>In 2014-2015 the team began the manufacturing process of IFS01 and competed in Barcelona with the prototype. In Barcelona it stood out as the best 1st year car in the competition.</p>

                            <p>2015-2016 was a year to improve IFS01 with a project called IFS01 EVO and the team competed in the Czech Republic 2017 with a better performance.</p>

                            <p>In 2016-2017 the ambition continued with the new project IFS02, our first electric vehicle.</p>

                            <p>In 2017-2018 the team competed in Barcelona with the IFS02 prototype and in 2018-2019 once the vehicle was manufactured the team participated in Formula Student Germany.</p>

                            <p>2019-2020 was an atypical year, the team participated in Formula Student UK class 2 ending in 4th position on business with the IFS03 prototype.</p>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>
        );
}

export default AboutUsEn;