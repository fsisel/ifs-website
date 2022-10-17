import React from "react";

import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import equipa_ifs from '../images/equipa2_fss2022.jpg'
import imageIfs02_1 from '../images/ifs02_1.webp'
import imageFsg_teams from '../images/fsg_teams.webp'
import equipa_ifs from '../images/equipa2_fss2022.jpg'

function AboutUsPt() {

        return (
            <div>

                <Header />

                <img className="cover" src={equipa_ifs} alt="Equipa ISEL Formula Student" />

                <article>

                    <h1>SOBRE NÓS</h1>

                    <div className="container dual right">
                        <div className="image_wrapper">
                            <img src={imageFsg_teams} alt="Formula Student Competition" />
                        </div>
                        <div className="text_wrapper">
                            <div>
                                <h2>A Competição</h2>
                                <p>Formula Student é uma competição entre estudantes de engenharia que ocorre anualmente em diversos países. Equipas de estudantes de todo o mundo projetam, constroem e testam um carro de competição monolugar. Os veículos são avaliados com base em múltiplos critérios. Existem eventos dinâmicos e estáticos, cada um destes eventos avalia uma ou mais caracteristicas do veículo como endurance, cost e design de engenharia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="container dual left">
                        <div className="text_wrapper">
                            <div>
                                <h2>O Projeto</h2>
                                <p>Este projeto, para além de melhorar as capacidades de engenharia adquiridas ao longo do percurso dos estudantes, permite aprimorar as soft skills, tais como a gestão de tempo e de recursos, comunicação e trabalho em equipa. Além de mais, ajuda a abrir portas no mercado de trabalho</p>
                                <p>Este ano a equipa está a produzir o veículo IFS03, um carro elétrico, cujo objetivo é melhorar a performance obtida pelo nosso segundo carro o IFS02.</p>
                            </div>
                        </div>
                        <div className="image_wrapper">
                            <img src={imageIfs02_1} alt="IFS02" />
                        </div>
                    </div>

                    <div className="container">
                        <div className="text_wrapper">
                            <h2>História</h2>
                            <p>A ISEL Formula Student foi fundada em 2013. Inicialmente era composta apenas por 7 membros, mas tem vindo a crescer. Atualmente contamos com cerca de 50 alunos que participam no projeto, vindo estes de todos os cursos do ISEL.</p>

                            <p>Em 2013-2014 a equipa começou a projetar o carro IFS01. É um veículo a combustão que tem como caracteristicas principais a sua leveza, segurança e simplicidade. A equipa, em 2014, participou na competição de Silverstone na classe 2, project class, onde acabou em terceiro lugar.</p>

                            <p>Nos anos 2014-2015, a equipa começou o processo de manufatura do IFS01 e competiu em Barcelona com o protótipo. Nessa mesma competição o veículo foi destacado como o melhor carro dentre as equipas com apenas um ano.</p>

                            <p>A época de 2015-2016 foi a altura para melhorar o veículo IFS01 com o projeto IFS01 EVO. A equipa participou na competição na República Checa, em 2017, com uma melhor performance.</p>

                            <p>Com ambição sempre presente, em 2016-2017 a equipa deu inicio a um novo projeto, o IFS02, o primeiro veículo elétrico da equipa.</p>

                            <p>Em 2017-2018, a equipa competiu em Barcelona com o protótipo do IFS02 e na época de 2018-2019 já com o veículo manufaturado a equipa participou na competição Formula Student na Alemanha.</p>

                            <p>A época de 2019-2020 foi atipica, a equipa competiu na Formula Student UK, na class 2, acabando em 4º lugar na competição de Business com o protótipo do veículo IFS03.</p>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>
        );

}

export default AboutUsPt;