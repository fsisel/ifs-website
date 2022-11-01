import React, { Component } from "react";

import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import imageIfsTeam from '../images/ifs_team.webp'


export default class ContactsPt extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>

                <Header />

                <img className="cover" src={imageIfsTeam} alt="Equipa ISEL Formula Student" />

                <article>
                    <h1>CONTACTOS</h1>

                    <div className="container">
                        <div className="text_wrapper">
                            <h2>Email</h2>
                            <p><a className="link" href="mailto:formulastudent@isel.pt">formulastudent@isel.pt</a></p>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>
        )
    }

}