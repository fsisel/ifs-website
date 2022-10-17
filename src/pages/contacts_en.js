import React, { Component } from "react";

import Header from '../components/header_en'
import Footer from '../components/footer_en'

import equipa_ifs from '../images/equipa2_fss2022.jpg'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = "pk.eyJ1IjoiaXNlbGZzIiwiYSI6ImNsNTJ0OHN1ajBqMXczZXBwcGNjNDJrNXQifQ.pWRCcF65D1vdyRb53201GA";

export default class ContactsEn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -9.117035,
            lat: 38.755914,
            zoom: 13.3
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.addControl(new mapboxgl.NavigationControl());
        map.scrollZoom.disable();

        new mapboxgl.Marker({ color: '#ff5500', rotation: 360 })
            .setLngLat([-9.117035, 38.755914])
            .addTo(map);
    }

    render() {
        return (
            <div>

                <Header />

                <img className="cover" src={equipa_ifs} alt="IFS and FST" />

                <article>
                    <h1>CONTACTS</h1>

                    <div className="container">
                        <div className="text_wrapper">
                            <h2>Email</h2>
                            <p><a className="link" href="mailto:formulastudent@isel.pt">formulastudent@isel.pt</a></p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="text_wrapper">
                            <h2>Where We Are</h2>
                            <p>Rua Conselheiro Emídio Navarro Nº1, ADEM M0.32<br />1959-007 Lisboa<br />Portugal</p>
                        </div>
                        <div id='map' ref={this.mapContainer} className="map-container"></div>
                    </div>

                </article>

                <Footer />

            </div>
        )
    }

}