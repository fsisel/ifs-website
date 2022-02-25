import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

export default class PrivacyPolicyEn extends Component {

    render() {
        return (
            <div>

                <Header />

                <article class="top_margin">

                    <h1>POLÍTICA DE PRIVACIDADE</h1>

                    <div class="container">
                        <div class="text_wrapper">
                            <p>Na ISEL Formula Student uma das nossas prioridades é a privacidade dos nossos utilizadores. Esta política de privacidade contém uma descrição da informação recolhida pelo website da ISEL Formula Student e como nós a utilizamos.</p>

                            <p>A ISEL Formula Student segue um protocolo de utilização de ficheiros estatísticos. Estes ficheiros são gerados quando o utilizador visita o website e fazem parte do serviço de alojamento do website. A informação dos utilizadores recolhida por estes ficheiros inclui endereços IP, o navegador web, o fornecedor de internet do utilizador (ISP) e data e hora dos acessos. Nenhum destes dados é relacionado com dados dos utilizadores pessoalmente identificáveis. O propósito da recolha desta informação é para análise estatística e gestão do website da ISEL Formula Student.</p>

                            <p>Se tiver alguma questão relacionada com a nossa política de privacidade contacte-nos através do endereço <a class="link" href="mailto:formulastudent@isel.pt">formulastudent@isel.pt</a></p>

                            <p>Ao utilizar o nosso website declara que tomou conhecimento e aceita a nossa política de privacidade.</p>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>
        )
    }

}