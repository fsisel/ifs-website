import React, { Component } from "react";
import Header from '../components/header_en'
import Footer from '../components/footer_en'

export default class PrivacyPolicyEn extends Component {

    render() {
        return (
            <div>

                <Header />

                <article class="top_margin">

                    <h1>PRIVACY POLICY</h1>

                    <div class="container">
                        <div class="text_wrapper">
                            <p>At ISEL Formula Student one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by ISEL Formula Student and how we use it.</p>

                            <p>ISEL Formula Student follows a standard procedure of using log files. These files log visitors when they visit websites and are a part of hosting services analytics. The information collected by log files include Internet Protocol (IP) addresses, browser type, internet service provider (ISP) and time stamp. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site and gathering demographic information.</p>

                            <p>If you have additional questions or require more information about our Privacy Policy, contact us at <a class="link" href="mailto:formulastudent@isel.pt">formulastudent@isel.pt</a></p>

                            <p>By using our website, you hereby consent to our Privacy Policy.</p>
                        </div>
                    </div>

                </article>

                <Footer />

            </div>
        )
    }

}