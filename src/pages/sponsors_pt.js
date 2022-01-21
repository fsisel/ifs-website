import React, { Component } from "react";
import Header from '../components/header_pt'
import Footer from '../components/footer_pt'

import sponsorIpl from '../sponsor_logos/ipl.svg'
import sponsorIsel from '../sponsor_logos/isel.svg'
import sponsorGrupoMetal from '../sponsor_logos/grupo_metal.svg'
import sponsorArsenalDoAlfeite from '../sponsor_logos/arsenal_do_alfeite.svg'
import sponsorBerner from '../sponsor_logos/berner.svg'
import sponsorLogoplaste from '../sponsor_logos/logoplaste.svg'
import sponsorTeConnectivity from '../sponsor_logos/te_connectivity.svg'

import sponsorSymetria from '../sponsor_logos/symetria.png'
import sponsorNatrater from '../sponsor_logos/natrater.jpg'
import sponsor3dIso from '../sponsor_logos/3d_iso.svg'
import sponsorThyssenkrupp from '../sponsor_logos/thyssenkrupp.svg'
import sponsorBicimax from '../sponsor_logos/bicimax.svg'
import sponsorFox from '../sponsor_logos/fox.svg'
import sponsorCodi from '../sponsor_logos/codi.svg'
import sponsorDeconorma from '../sponsor_logos/deconorma.png'
import sponsorTsf from '../sponsor_logos/tsf.svg'
import sponsorFarmi from '../sponsor_logos/farmi.png'
import sponsorEuroCircuits from '../sponsor_logos/euro_circuits.jpg'
import sponsorMjbranco from '../sponsor_logos/mjbranco.svg'

import sponsorRamadaAcos from '../sponsor_logos/ramada_acos.svg'
import sponsorEurocorreias from '../sponsor_logos/eurocorreias.png'
import sponsorBender from '../sponsor_logos/bender.svg'
import sponsorLasindustria from '../sponsor_logos/lasindustria.png'
import sponsorCopisel from '../sponsor_logos/copisel.svg'
import sponsorCarpintariaLinoEFilhos from '../sponsor_logos/carpintaria_lino_e_filhos.png'
import sponsorSolidworks from '../sponsor_logos/solidworks.svg'
import sponsorAltium from '../sponsor_logos/altium.svg'
import sponsorAnsys from '../sponsor_logos/ansys.svg'

export default class SponsorsEn extends Component {

    render() {
        return (
            <div>

            <Header/>

            <article class="top_margin">
                <h1>PATROCINADORES</h1>

                <div id="sponsor_grid">
                    <div class="sponsors gold">
                        <a href="https://www.ipl.pt/home"><img src={sponsorIpl} alt="IPL" /></a>
                        <a href="https://www.isel.pt"><img src={sponsorIsel} alt="ISEL" /></a>
                        <a href="https://grupometal.com"><img src={sponsorGrupoMetal} alt="Grupo Metal" /></a>
                        <a href="http://www.arsenal-alfeite.pt/"><img src={sponsorArsenalDoAlfeite} alt="Arsenal do Alfeite" /></a>
                        <a href="https://shop.berner.eu/pt-pt/"><img src={sponsorBerner} alt="Berner" /></a>
                        <a href="https://www.logoplaste.com/"><img src={sponsorLogoplaste} alt="Logoplaste" /></a>
                        <a href="https://www.te.com/usa-en/home.html"><img src={sponsorTeConnectivity} alt="TE Connectivity" /></a>
                    </div>

                    <div class="separator"></div>

                    <div class="sponsors silver">
                        <a href="https://symetria.pt/"><img src={sponsorSymetria} alt="Symetria"/></a>
                        <a href="http://www.natrater.pt/"><img src={sponsorNatrater} alt="Natrater" /></a>
                        <a href="https://www.3d-iso.pt/index.php"><img src={sponsor3dIso} alt="3DISO" /></a>
                        <a href="https://www.thyssenkrupp.com/en/home"><img src={sponsorThyssenkrupp} alt="Thyssenkrupp" /></a>
                        <a href="https://www.bicimax.pt/"><img src={sponsorBicimax} alt="Bicimax" /></a>
                        <a href="https://www.ridefox.com/"><img src={sponsorFox} alt="Fox" /></a>
                        <a href="https://www.codi.pt/"><img src={sponsorCodi} alt="CODI" /></a>
                        <a href="https://deconorma.com/pt/"><img src={sponsorDeconorma} alt="Deconorma" /></a>
                        <a href="http://www.tsf-trofa.com/pt/"><img src={sponsorTsf} alt="TSF" /></a>
                        <a href="https://www.farmi.pt/"><img src={sponsorFarmi} alt="Farmi" /></a>
                        <a href="https://www.eurocircuits.com/"><img src={sponsorEuroCircuits} alt="EuroCircuits" /></a>
                        <a href="http://www.mjbranco.pt/"><img src={sponsorMjbranco} alt="MJBranco" /></a>
                    </div>

                    <div class="separator"></div>

                    <div class="sponsors bronze">
                        <a href="https://www.ramada.pt/pt/"><img src={sponsorRamadaAcos} alt="Ramada Aços" /></a>
                        <a href="https://eurocorreias.pt/"><img src={sponsorEurocorreias} alt="Eurocorreias" /></a>
                        <a href="https://www.bender.de/en"><img src={sponsorBender} alt="Bender" /></a>
                        <a href="https://www.lasindustria.pt/"><img src={sponsorLasindustria} alt="Lasindustria" /></a>
                        <a href="https://www.copisel.pt/"><img src={sponsorCopisel} alt="Copisel" /></a>
                        <a href="http://linoefilhos.pt/"><img src={sponsorCarpintariaLinoEFilhos} alt="Carpintaria Lino e Filhos" /></a>
                        <a href="https://www.solidworks.com/"><img src={sponsorSolidworks} alt="Solidworks" /></a>
                        <a href="https://www.altium.com/"><img src={sponsorAltium} alt="Altium" /></a>
                        <a href="https://www.ansys.com/"><img src={sponsorAnsys} alt="Ansys" /></a>
                    </div>
                </div>
                
            </article>

            <Footer/>

            </div>
        )
    }
    
}