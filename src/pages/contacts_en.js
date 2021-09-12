import React, { Component } from "react";
import Header from '../components/header'
import Footer from '../components/footer'

import imageFspt from '../images/fspt.jpg'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNlbGZzIiwiYSI6ImNrcTJ1aHdhcjBmYWEydWthNTBjOG1ob3AifQ.zVNe8iCDYzIyxv-dH3lGTQ';

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
    
        new mapboxgl.Popup({ closeOnClick: false })
            .setLngLat([-9.117035, 38.755914])
            .setHTML("<h2>ISEL Formula Student</h2><p>Rua Conselheiro Emídio Navarro Nº1, ADEM M0.32<br>1959-007 Lisboa</p>")
            .addTo(map);
    }

    render() {
        return (
            <div>

            <Header/>

            <img class="cover" src={imageFspt} alt="IFS and FST" />

            <article>
                <h1>CONTACTS</h1>

                <div class="container">
                    <div class="text_wrapper">
                        <h2>Email</h2>
                        <p>formulastudent@isel.pt</p>
                    </div>
                </div>

                <div class="container">
                    <div class="text_wrapper">
                        <h2>Where We Are</h2>
                    </div>
                    <div id='map' ref={this.mapContainer} className="map-container"></div>
                </div>

            </article>

            <Footer/>

            </div>
        )
    }
    
}