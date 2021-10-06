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
import sponsorSkf from '../sponsor_logos/skf.svg'

export default class SponsorsEn extends Component {

    render() {
        return (
            <div>

            <Header/>

            <article class="top_margin">
                <h1>PATROCINADORES</h1>

                <div id="sponsor_grid">
                    <div class="sponsors gold">
                        <img src={sponsorIpl} alt="IPL" />
                        <img src={sponsorIsel} alt="ISEL" />
                        <img src={sponsorGrupoMetal} alt="Grupo Metal" />
                        <img src={sponsorArsenalDoAlfeite} alt="Arsenal do Alfeite" />
                        <img src={sponsorBerner} alt="Berner" />
                        <img src={sponsorLogoplaste} alt="Logoplaste" />
                        <img src={sponsorTeConnectivity} alt="TE Connectivity" />
                    </div>

                    <div class="separator"></div>

                    <div class="sponsors silver">
                        <img src={sponsorSymetria} alt="Symetria" />
                        <img src={sponsorNatrater} alt="Natrater" />
                        <img src={sponsor3dIso} alt="3DISO" />
                        <img src={sponsorThyssenkrupp} alt="Thyssenkrupp" />
                        <img src={sponsorBicimax} alt="Bicimax" />
                        <img src={sponsorFox} alt="Fox" />
                        <img src={sponsorCodi} alt="CODI" />
                        <img src={sponsorDeconorma} alt="Deconorma" />
                        <img src={sponsorTsf} alt="TSF" />
                        <img src={sponsorFarmi} alt="Farmi" />
                        <img src={sponsorEuroCircuits} alt="EuroCircuits" />
                        <img src={sponsorMjbranco} alt="MJBranco" />
                    </div>

                    <div class="separator"></div>

                    <div class="sponsors bronze">
                        <img src={sponsorRamadaAcos} alt="Ramada Aços" />
                        <img src={sponsorEurocorreias} alt="Eurocorreias" />
                        <img src={sponsorBender} alt="Bender" />
                        <img src={sponsorLasindustria} alt="Lasindustria" />
                        <img src={sponsorCopisel} alt="Copisel" />
                        <img src={sponsorCarpintariaLinoEFilhos} alt="Carpintaria Lino e Filhos" />
                        <img src={sponsorSolidworks} alt="Solidworks" />
                        <img src={sponsorAltium} alt="Altium" />
                        <img src={sponsorAnsys} alt="Ansys" />
                        <img src={sponsorSkf} alt="SKF" />
                    </div>
                </div>
                
            </article>

            <Footer/>

            </div>
        )
    }
    
}