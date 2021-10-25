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
                            <p>Formula Student é uma competição entre estudantes de engenharia que ocorre anualmente em diversos países. Equipas de estudantes de todo o mundo projetam, constroiem e testam um carro de corridas do estilo Formula com dimensões reduzidas. Os veículos são avaliados com base em múltiplos critérios. Esta competição é gerida pela Institution of Mechanical Engineers e utiliza as mesmas regras que  a Formula SAE original com algumas regulamentações suplementares. Existem eventos dinâmicos e estáticos, cada um destes eventos avalia uma ou mais caracteristicas do veículo como a endurance, cost, design de engenharia entre outras coisas.</p>
                        </div>
                    </div>
                </div>

                <div class="container dual left">
                    <div class="text_wrapper">
                        <div>
                            <h2>O Projeto</h2>
                            <p>Este projeto, para além de melhorar as capacidades de engenharias adquiridas durante as aulas, auxilia a aprimorar as soft skills, tais como a gestão de tempo e de recursos, falar para o público também como ajuda a trabalhar em equipa.</p>
                            <p>Além do mais, ajuda a abrir portas no mercado de trabalho devido aos alumnis da equipa que trabalham em empresas que se estão relacionadas a esta área. </p>
                            <p>Este ano a equipa está a produzir o veículo IFS03, um carro elétrico, cujo objetivo é melhorar a performance obtida pelo nosso segundo carro o IFS02.</p>
                        </div>
                    </div>
                    <div class="image_wrapper">
                        <img src={imageIfs02_1} alt="IFS02" />
                    </div>
                </div>

                <div class="container">
                    <div class="text_wrapper">
                        <h2>História</h2>
                        <p>A ISEL Formula Student foi fundada em 2013. Inicialmente era composta apenas por 7 membros, mas tem vindo a crescer. Atualmente, são 44 os membros que participam na equipa sendo estes de todos os cursos do ISEL.</p>

                        <p>Em 2013-2014 a equipa começou a projetar o carro IFS01. É um veículo a combustão que tem como caracteristicas principais a sua leveza, segurança e simplicidade. A equipa, em 2014, participou na competição de Silverstone na classe 2, project class, onde acabou em terceiro lugar.</p>

                        <p>Nos anos 2014-2015, a equipa começou o processo de manufatura do IFS01 e competiu em Barcelona com o protótipo. Nessa mesma competição o veículo foi destacado como o melhor carro dentre as equipas com apenas um ano.</p>

                        <p>A época de 2015-2016 foi a altura para melhorar o veículo IFS01 com o projeto IFS01 EVO. A equipa participou na competição na República Checa, em 2017, com uma melhor performance.</p>

                        <p>Com ambição sempre presente, em 2016-2017 a equipa deu inicio a um novo projeto, o IFS02, um veículo elétrico com objetivos similares aos do IFS01.</p>

                        <p>Em 2017-2018, a equipa competiu em Barcelona com o protótipo do IFS02 e na época de 2018-2019 já com o veículo manufaturado a equipa participou na competição Formula Student na Alemanha.</p>

                        <p>A época de 2019-2020 foi atipica, a equipa competiu na Formula Student UK, na class 2, acabando em 4º lugar na competição de Business devido ao protótipo do veículo IFS03e.</p>
                    </div>
                </div>

            </article>

            <Footer/>

            </div>
        )
    }
    
}