import React, { Component } from "react";
import Footer from '../components/footer_en';
import Header from '../components/header_en';
import sponsor3dIso from '../sponsor_logos/3d_iso.svg';
import sponsorAltium from '../sponsor_logos/altium.svg';
import sponsorAnsys from '../sponsor_logos/ansys.svg';
import sponsorArsenalDoAlfeite from '../sponsor_logos/arsenal_do_alfeite.svg';
import sponsorBender from '../sponsor_logos/bender.svg';
import sponsorBerner from '../sponsor_logos/berner.svg';
import sponsorCarpintariaLinoEFilhos from '../sponsor_logos/carpintaria_lino_e_filhos.png';
import sponsorCodi from '../sponsor_logos/codi.svg';
import sponsorCopisel from '../sponsor_logos/copisel.svg';
import sponsorDeconorma from '../sponsor_logos/deconorma.png';
import sponsorEurocorreias from '../sponsor_logos/eurocorreias.png';
import sponsorEuroCircuits from '../sponsor_logos/euro_circuits.jpg';
import sponsorFarmi from '../sponsor_logos/farmi.png';
import sponsorGrupoMetal from '../sponsor_logos/grupo_metal.svg';
import sponsorIpl from '../sponsor_logos/ipl.svg';
import sponsorIsel from '../sponsor_logos/isel.svg';
import sponsorLogoplaste from '../sponsor_logos/logoplaste.svg';
import sponsorMjbranco from '../sponsor_logos/mjbranco.svg';
import sponsorNatrater from '../sponsor_logos/natrater.jpg';
import sponsorRamadaAcos from '../sponsor_logos/ramada_acos.svg';
import sponsorSolidworks from '../sponsor_logos/solidworks.svg';
import sponsorSymetria from '../sponsor_logos/symetria.png';
import sponsorTeConnectivity from '../sponsor_logos/te_connectivity.svg';
import sponsorTsf from '../sponsor_logos/tsf.svg';
import sponsorCubotonic from '../sponsor_logos/cubotonic.png';
import sponsorInfusao from '../sponsor_logos/infusao.svg';
import sponsorLeomavel from '../sponsor_logos/leomavel.png';
import sponsorReiman from '../sponsor_logos/reiman.jpg';
import sponsorMaquitorno from '../sponsor_logos/maquitorno.png';
import sponsorNorelem from '../sponsor_logos/norelem.png';
import sponsorAeisel from '../sponsor_logos/aeisel.png';

export default class SponsorsEn extends Component {

    render() {
        return (
            <div>

                <Header />

                <article className="top_margin">
                    <h1>SPONSORS</h1>

                    <div id="sponsor_grid">

                        <div className="separator"></div>

                        <div className="sponsors platinum">
                            <a href="https://www.isel.pt" target="_blank" rel="noreferrer"><img src={sponsorIsel} alt="ISEL" /></a>
                            <a href="https://www.ipl.pt" target="_blank" rel="noreferrer"><img src={sponsorIpl} alt="IPL" style={{ width: 300 }} /></a>
                        </div>
                        <div className="sponsors platinum">
                            <a href="https://grupometal.com" target="_blank" rel="noreferrer"><img src={sponsorGrupoMetal} alt="Grupo Metal" /></a>
                            <a href="https://www.infusao.pt" target="_blank" rel="noreferrer"><img src={sponsorInfusao} alt="Infusão" style={{ width: 300 }} /></a>
                            <a href="https://www.logoplaste.com" target="_blank" rel="noreferrer" ><img src={sponsorLogoplaste} alt="Logoplaste" style={{ width: 300 }} /></a>
                        </div>

                        <div className="separator"></div>

                        <div className="sponsors gold">
                            <a href="https://www.cubotonic.pt" target="_blank" rel="noreferrer"><img src={sponsorCubotonic} alt="Cubotónic" style={{ width: 200 }} /></a>
                            <a href="https://shop.berner.eu" target="_blank" rel="noreferrer"><img src={sponsorBerner} alt="Berner" /></a>
                            <a href="http://www.tsf-trofa.com" target="_blank" rel="noreferrer"><img src={sponsorTsf} alt="TSF" /></a>
                            <a href="https://www.codi.pt" target="_blank" rel="noreferrer"><img src={sponsorCodi} alt="CODI" /></a>
                            <a href="http://leomavel.pt" target="_blank" rel="noreferrer"><img src={sponsorLeomavel} alt="Leomavel Moldes" /></a>
                            <a href="https://reiman.pt" target="_blank" rel="noreferrer"><img src={sponsorReiman} alt="Reiman" /></a>
                            <a href="https://www.te.com" target="_blank" rel="noreferrer"><img src={sponsorTeConnectivity} alt="TE Connectivity" /></a>
                            <a href="https://symetria.pt" target="_blank" rel="noreferrer"><img src={sponsorSymetria} alt="Symetria" /></a>
                        </div>

                        <div className="separator"></div>

                        <div className="sponsors silver">
                            <a href="https://www.3d-iso.pt" target="_blank" rel="noreferrer"><img src={sponsor3dIso} alt="3DISO" /></a>
                            <a href="/en/sponsors"><img src={sponsorMaquitorno} alt="Maquitorno" /></a>
                            <a href="http://www.arsenal-alfeite.pt" target="_blank" rel="noreferrer"><img src={sponsorArsenalDoAlfeite} alt="Arsenal do Alfeite" /></a>
                            <a href="http://www.mjbranco.pt" target="_blank" rel="noreferrer"><img src={sponsorMjbranco} alt="MJBranco" /></a>
                            <a href="https://www.farmi.pt" target="_blank" rel="noreferrer"><img src={sponsorFarmi} alt="Farmi" /></a>
                            <a href="https://norelem.es" target="_blank" rel="noreferrer"><img src={sponsorNorelem} alt="Norelem" /></a>
                            <a href="http://www.natrater.pt" target="_blank" rel="noreferrer"><img src={sponsorNatrater} alt="Natrater" /></a>
                            <a href="https://deconorma.com" target="_blank" rel="noreferrer"><img src={sponsorDeconorma} alt="Deconorma" /></a>
                            <a href="https://www.eurocircuits.com" target="_blank" rel="noreferrer"><img src={sponsorEuroCircuits} alt="Eurocircuits" /></a>
                            <a href="https://www.ramada.pt" target="_blank" rel="noreferrer"><img src={sponsorRamadaAcos} alt="Ramada Aços" style={{ width: 200 }} /></a>
                            <a href="https://eurocorreias.pt" target="_blank" rel="noreferrer"><img src={sponsorEurocorreias} alt="Eurocorreias" style={{ width: 200 }} /></a>
                        </div>

                        <div className="separator"></div>

                        <div className="sponsors bronze">
                            <a href="https://www.bender.de" target="_blank" rel="noreferrer"><img src={sponsorBender} alt="Bender" /></a>
                            <a href="https://www.copisel.pt" target="_blank" rel="noreferrer"><img src={sponsorCopisel} alt="Copisel" /></a>
                            <a href="http://linoefilhos.pt" target="_blank" rel="noreferrer"><img src={sponsorCarpintariaLinoEFilhos} alt="Carpintaria Lino e Filhos" /></a>
                            <a href="https://www.facebook.com/AEISEL.1984" target="_blank" rel="noreferrer"><img src={sponsorAeisel} alt="AEISEL" /></a>
                            <a href="https://www.solidworks.com" target="_blank" rel="noreferrer"><img src={sponsorSolidworks} alt="Solidworks" /></a>
                            <a href="https://www.altium.com" target="_blank" rel="noreferrer"><img src={sponsorAltium} alt="Altium" /></a>
                            <a href="https://www.ansys.com" target="_blank" rel="noreferrer"><img src={sponsorAnsys} alt="Ansys" /></a>
                        </div>

                        <div className="separator"></div>

                    </div>

                </article>

                <Footer />

            </div>
        )
    }

}