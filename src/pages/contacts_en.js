import React, { Component } from "react";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import imageIfsTeam from '../images/ifs_team.webp'


export default class ContactsEn extends Component {
    
    componentDidMount() {

    }

    render() {
        return (
            <div>

                <Header />

                <img className="cover" src={imageIfsTeam} alt="ISEL Formula Student Team" />

                <article>
                    <h1>CONTACTS</h1>

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