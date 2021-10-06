import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import imageIfsTeam from '../images/ifs_team.webp'
import imageIfs02_1 from '../images/ifs02_1.webp'
import imageFsg_teams from '../images/fsg_teams.webp'

export default class AboutUsEn extends Component {

    render() {
        return (
            <div>

            <Header/>

            <img class="cover" src={imageIfsTeam} alt="ISEL Formula Student Team" />

            <article>
                
                <h1>SOBRE NÓS</h1>

                <div class="container dual right">
                    <div class="image_wrapper">
                        <img src={imageFsg_teams} alt="Formula Student Competition" />
                    </div>
                    <div class="text_wrapper">
                        <div>
                            <h2>A Competição</h2>
                            <p>Formula Student is a student engineering competition held annually in several countries. Student teams from around the world design, build, test, and race a small-scale formula style racing car. The cars are judged on a few criteria. It is run by the Institution of Mechanical Engineers and uses the same rules as the original Formula SAE with supplementary regulations. There are dynamics and statics events, each event measures one or more characteristics of the vehicle such as endurance, cost or engineering design, inter alia.</p>
                        </div>
                    </div>
                </div>

                <div class="container dual left">
                    <div class="text_wrapper">
                        <div>
                            <h2>O Projeto</h2>
                            <p>This project, in addition to improving our engineering skills above the content learnt in the lectures, also helps us gain soft skills, such as time and resources management, public speaking and teamwork. Furthermore, it helps open professional doors due to having alumni from the team working for companies that sponsor us.</p>

                            <p>This year the team is producing IFS03, an electric car which goal is to improve the performance achieved by IFS02.</p>
                        </div>
                    </div>
                    <div class="image_wrapper">
                        <img src={imageIfs02_1} alt="IFS02" />
                    </div>
                </div>

                <div class="container">
                    <div class="text_wrapper">
                        <h2>História</h2>
                        <p>ISEL Formula Student team was founded in 2013. Initially it was compound by 7 members, but it has been expanding. Currently, we have 44 members from all ISEL degrees.</p>

                        <p>In 2013-2014 the team started the design of IFS01. A combustion vehicle concept was developed that had lightness, reliability and simplicity as its main characteristics. The team participated in the 2014 Silverstone competition in class 2, project class, where it finished in third place.</p>

                        <p>In 2014-2015 the team begin the manufacturing process of IFS01 and competed in Barcelona with the prototype. In Barcelona it stood out as the best 1st year car in the competition.</p>

                        <p>2015-2016 was a year to improve IFS01 with a project called IFS01 EVO and the team competed in the Czech Republic 2017 with a better performance.</p>

                        <p>In 2016-2017 the ambition continued with the new project IFS02, an electric vehicle with similar objectives as IFS01.</p>

                        <p>2017-2018 the team competed in Barcelona with the IFS02’s prototype and in 2018-2019 once the vehicle was manufactured the team participated in Formula Student Germany.</p>

                        <p>2019-2020 was an atypical year, the team participated in Formula Student UK class 2 ending in the 4th position on business due to the IFS03e prototype.</p>
                    </div>
                </div>

            </article>

            <Footer/>

            </div>
        )
    }
    
}