import React from "react";
import { Link } from "react-router-dom";

import FooterPt from "../components/footer_pt";
import HeaderPt from "../components/header_pt";

import sponsorAltium from "../sponsor_logos/altium.svg";
import sponsorAnsys from "../sponsor_logos/ansys.svg";
import sponsorBender from "../sponsor_logos/bender.svg";
import sponsorCarpintariaLinoEFilhos from "../sponsor_logos/carpintaria_lino_e_filhos.webp";
import sponsorCodi from "../sponsor_logos/codi.svg";
import sponsorCopisel from "../sponsor_logos/copisel.svg";
import sponsorDeconorma from "../sponsor_logos/deconorma.webp";
import sponsorEurocorreias from "../sponsor_logos/eurocorreias.webp";
import sponsorEuroCircuits from "../sponsor_logos/euro_circuits.webp";
import sponsorJdeus from "../sponsor_logos/jdeus.svg";
import sponsorGrupoMetal from "../sponsor_logos/grupo_metal.svg";
import sponsorIpl from "../sponsor_logos/ipl.svg";
import sponsorIsel from "../sponsor_logos/isel.svg";
import sponsorLogoplaste from "../sponsor_logos/logoplaste.svg";
import sponsorMjbranco from "../sponsor_logos/mjbranco.webp";
import sponsorNatrater from "../sponsor_logos/natrater.webp";
import sponsorRamadaAcos from "../sponsor_logos/ramada_acos.svg";
import sponsorSolidworks from "../sponsor_logos/solidworks.svg";
import sponsorSymetria from "../sponsor_logos/symetria.webp";
import sponsorTeConnectivity from "../sponsor_logos/te_connectivity.svg";
import sponsorTsf from "../sponsor_logos/tsf.webp";
import sponsorCubotonic from "../sponsor_logos/cubotonic.webp";
import sponsorInfusao from "../sponsor_logos/infusao.webp";
import sponsorLeomavel from "../sponsor_logos/leomavel.webp";
import sponsorReiman from "../sponsor_logos/reiman.svg";
import sponsorMaquitorno from "../sponsor_logos/maquitorno.webp";
import sponsorNorelem from "../sponsor_logos/norelem.webp";
import sponsorAeisel from "../sponsor_logos/aeisel.webp";
import sponsorSabino from "../sponsor_logos/Sabino.webp";
import sponsorEasyComposites from "../sponsor_logos/easy_composites.webp";
import sponsorMilwaukee from "../sponsor_logos/milwaukee.svg";
import sponsorVlMoldes from "../sponsor_logos/vl_moldes.svg";
import sponsorAtomicShop from "../sponsor_logos/atomic_shop.svg";
import sponsorCarlis from "../sponsor_logos/carlis.webp";
import sponsorSimscale from "../sponsor_logos/SimScale.webp";
import sponsorCoficab from "../sponsor_logos/Coficab.webp";
import sponsorTesla from "../sponsor_logos/tesla.png";
import sponsorCasauto from "../sponsor_logos/Casauto.webp";
import sponsorGleal from "../sponsor_logos/GLeal.webp";
import sponsorRebelCo from "../sponsor_logos/Rebelco.webp";
import sponsorProtomill from "../sponsor_logos/Protomill.webp";
import sponsorCrm from "../sponsor_logos/CRM.webp";
import sponsorRapid from "../sponsor_logos/rapidharness.webp";
import sponsorSchroth from "../sponsor_logos/Schroth.webp";
import sponsorMathWorks from "../sponsor_logos/mathworks.svg";
import sponsorViGrade from "../sponsor_logos/vi-grade_red.svg";
import sponsorCtw from "../sponsor_logos/ctw.svg";
import sponsorAlmeidaLamas from "../sponsor_logos/Almeida_Lamas.svg";
import sponsorS4 from "../sponsor_logos/s4metro.svg";
import sponsorRus from "../sponsor_logos/rus-logo.svg";
import sponsorEnepaq from "../sponsor_logos/enepaq.webp";
import sponsorFrade from "../sponsor_logos/frade.webp";
import sponsorMvieira from "../sponsor_logos/mvieira.webp";
import sponsorFocoCriativo from "../sponsor_logos/focoCriativo.webp";
import sponsorAutoSock from "../sponsor_logos/auto_sock.webp";
import sponsorLoctite from "../sponsor_logos/loctite.webp";

function SponsorsPt() {
  return (
    <div>
      <HeaderPt />

      <article className="top_margin">
        <h1 className="sponsors-titles">PATROCINADORES</h1>

        <div id="sponsor_grid">
          <section className="sponsors-category">
            <h2>PLATINA</h2>
            <div className="sponsors platinum">
              <a href="https://www.isel.pt" target="_blank" rel="noreferrer">
                <img src={sponsorIsel} alt="ISEL" />
              </a>
              <a href="https://www.ipl.pt" target="_blank" rel="noreferrer">
                <img src={sponsorIpl} alt="IPL" style={{ width: 300 }} />
              </a>
            </div>
            <div className="sponsors platinum">
              <a href="https://www.codi.pt" target="_blank" rel="noreferrer">
                <img src={sponsorCodi} alt="CODI" />
              </a>
              <a href="https://grupometal.com" target="_blank" rel="noreferrer">
                <img src={sponsorGrupoMetal} alt="Grupo Metal" />
              </a>
              <a href="https://www.infusao.pt" target="_blank" rel="noreferrer">
                <img
                  src={sponsorInfusao}
                  alt="Infusão"
                  style={{ width: 270 }}
                />
              </a>
            </div>
            <div className="sponsors platinum">
              <a
                href="https://www.milwaukeetool.eu"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorMilwaukee} alt="Milwaukee" />
              </a>
              <a
                href="https://www.vlmoldes.pt"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorVlMoldes} alt="VL Moldes" />
              </a>
            </div>
          </section>

          <div className="separator"></div>

          <section className="sponsors-category">
            <br></br>
            <h2>OURO</h2>

            <div className="sponsors gold">
              <a
                href="https://www.coficab.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorCoficab} alt="Coficab" />
              </a>
              <a href="http://leomavel.pt" target="_blank" rel="noreferrer">
                <img src={sponsorLeomavel} alt="Leomavel Moldes" />
              </a>
              <a
                href="https://www.tesla.com/pt_pt"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorTesla} alt="Tesla" />
              </a>
            </div>

            <div className="sponsors gold">
              <a
                href="http://www.tsf-trofa.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorTsf} alt="TSF" />
              </a>
              <a href="https://www.te.com" target="_blank" rel="noreferrer">
                <img src={sponsorTeConnectivity} alt="TE Connectivity" />
              </a>
              <a href="http://www.mjbranco.pt" target="_blank" rel="noreferrer">
                <img src={sponsorMjbranco} alt="MJBranco" />
              </a>
              <a href="https://reiman.pt" target="_blank" rel="noreferrer">
                <img src={sponsorReiman} alt="Reiman" />
              </a>
            </div>
          </section>

          <div className="separator"></div>

          <section className="sponsors-category">
            <br></br>
            <h2>PRATA</h2>
            <div className="sponsors silver">
              <a href="/en/sponsors">
                <img src={sponsorMaquitorno} alt="Maquitorno" />
              </a>
              <a href="https://norelem.es" target="_blank" rel="noreferrer">
                <img src={sponsorNorelem} alt="Norelem" />
              </a>
              <a
                href="https://www.eurocircuits.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={sponsorEuroCircuits}
                  alt="Eurocircuits"
                  style={{ width: 120 }}
                />
              </a>

              <a href="https://deconorma.com" target="_blank" rel="noreferrer">
                <img src={sponsorDeconorma} alt="Deconorma" />
              </a>
              <div className="sponsors silver">
                <a
                  href="http://www.natrater.pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsorNatrater} alt="Natrater" />
                </a>
                <a
                  href="https://fococriativo.pt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsorFocoCriativo} alt="Foco Criativo" />
                </a>
                <a
                  href="https://www.jdeus.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsorJdeus} alt="Jdeus" />
                </a>
                <a
                  href="https://www.cubotonic.pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorCubotonic}
                    alt="Cubotónic"
                    style={{ width: 225 }}
                  />
                </a>
              </div>
              <div className="sponsors silver">
                <a href="http://www.carlis.pt" target="_blank" rel="noreferrer">
                  <img src={sponsorCarlis} alt="Carlis" />
                </a>
                <a
                  href="https://casauto.lojasonlinectt.pt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorCasauto}
                    alt="Casauto"
                    style={{ width: 200 }}
                  />
                </a>
                <a
                  href="https://www.criticaltechworks.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorCtw}
                    alt="Critical Techworks"
                    style={{ width: 180 }}
                  />
                </a>
                <a
                  href="https://www.logoplaste.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorLogoplaste}
                    alt="Logoplaste"
                    style={{ width: 300 }}
                  />
                </a>
                <a
                  href="https://www.henkel-adhesives.com/br/pt/sobre/nossas-marcas/loctite-new.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sponsorLoctite}
                    alt="Loctite"
                  />
                </a>
              </div>
            </div>
          </section>

          <div className="separator"></div>

          <section className="sponsors-category">
            <br></br>
            <h2>BRONZE</h2>
            <div className="sponsors bronze">
              <a
                href="https://almeida-lamas.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={sponsorAlmeidaLamas}
                  alt="Almeida & Lamas"
                  style={{ width: 180 }}
                />
              </a>
              <a
                href="https://www.solutions4metrology.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorS4} alt="S4 Metro" />
              </a>
              <a
                href="https://www.gleal.pt/pt/home/index"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorGleal} alt="GLeal" />
              </a>
              <a href="https://sabino.pt" target="_blank" rel="noreferrer">
                <img src={sponsorSabino} alt="Sabino" />
              </a>

              <div className="sponsors bronze">
                <a href="https://rebelco.pt" target="_blank" rel="noreferrer">
                  <img src={sponsorRebelCo} alt="RebelCo" />
                </a>
                <a
                  href="https://www.copisel.pt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsorCopisel} alt="Copisel" />
                </a>
                <a href="https://protomill.pt" target="_blank" rel="noreferrer">
                  <img
                    src={sponsorProtomill}
                    alt="Protomill"
                    style={{ width: 200 }}
                  />
                </a>
                <a href="https://symetria.pt" target="_blank" rel="noreferrer">
                  <img src={sponsorSymetria} alt="Symetria" />
                </a>
                <a
                  href="https://www2.news.vi-grade.com/e/832623/2025-01-13/2cdft7/894804871/h/GJKopkmegudU6l7fOWnryJc5KiKF2YJa8B3CDOn6X0s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={sponsorViGrade} alt="Vigrade" />
                </a>
              </div>
            </div>
          </section>

          <div className="separator"></div>

          <section className="sponsors-category">
            <br></br>
            <h2>PARCEIROS</h2>
            <div id="partners" className="sponsors bronze">
              <a
                href="https://www.simscale.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorSimscale} alt="Simscale" />
              </a>
              <a
                href="https://www.rohde-schwarz.com/pt/home_48230.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorRus} alt="Rus" />
              </a>
              <a href="https://www.ansys.com" target="_blank" rel="noreferrer">
                <img src={sponsorAnsys} alt="Ansys" />
              </a>
              <a href="https://www.altium.com" target="_blank" rel="noreferrer">
                <img src={sponsorAltium} alt="Altium" />
              </a>
              <a
                href="https://www.easycomposites.eu/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorEasyComposites} alt="EasyComposites" />
              </a>
            </div>

            <div id="partners" className="sponsors bronze">
              <a href="https://www.ramada.pt" target="_blank" rel="noreferrer">
                <img
                  src={sponsorRamadaAcos}
                  alt="Ramada Aços"
                  style={{ width: 200 }}
                />
              </a>
              <a href="http://linoefilhos.pt" target="_blank" rel="noreferrer">
                <img
                  src={sponsorCarpintariaLinoEFilhos}
                  alt="Carpintaria Lino e Filhos"
                />
              </a>
              <a
                href="https://www.atomic-shop.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorAtomicShop} alt="Atomic Shop" />
              </a>
              <a
                href="https://www.facebook.com/AEISEL.1984"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorAeisel} alt="AEISEL" />
              </a>
              <a
                href="https://www.crm-motorsport.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorCrm} alt="CRM" />
              </a>
            </div>
            <div id="partners" className="sponsors bronze">
              <a
                href="https://rapidharness.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorRapid} alt="Rapid Harness" />
              </a>
              <a
                href="https://www.solidworks.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorSolidworks} alt="Solidworks" />
              </a>
              <a href="https://enepaq.com/" target="_blank" rel="noreferrer">
                <img src={sponsorEnepaq} alt="Enepaq" />
              </a>
              <a
                href="https://www.schrothracing.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorSchroth} alt="Schroth" />
              </a>
              <a
                href="https://frademetalurgica.pt/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorFrade} alt="Frade Metarlúgica" />
              </a>
            </div>
            <div id="partners" className="sponsors bronze">
              <a href="https://www.bender.de" target="_blank" rel="noreferrer">
                <img src={sponsorBender} alt="Bender" />
              </a>
              <a
                href="https://eurocorreias.pt"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={sponsorEurocorreias}
                  alt="Eurocorreias"
                  style={{ width: 200 }}
                />
              </a>
              <a href="https://mvieira.pt/" target="_blank" rel="noreferrer">
                <img
                  src={sponsorMvieira}
                  alt="MViera"
                  style={{ height: 130, paddingBottom: "2em" }}
                />
              </a>
              <a
                href="https://www.mathworks.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sponsorMathWorks} alt="MathWorks" />
              </a>
              <a href="https://autosock.com/" target="_blank" rel="noreferrer">
                <img src={sponsorAutoSock} alt="Auto Sock" />
              </a>
            </div>
          </section>
        </div>
      </article>
      <h1 className="sponsors-titles">Interessado em apoiar o projeto ?</h1>

      <Link to="/pt/contacts" className="parallelogram center">
        <div className="orange_detail"></div>
        <div className="text">CONTACTE-NOS</div>
      </Link>

      <FooterPt />
    </div>
  );
}

export default SponsorsPt;
