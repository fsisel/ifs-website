import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import linkedinIcon from "../icons/linkedin.svg";
import instagramIcon from "../icons/instagram.svg";
import facebookIcon from "../icons/facebook.svg";
import tiktokIcon from "../icons/tiktok_s.svg";
import isfIcon from "../logos/ifs_icon_dark.svg";

function FooterPt() {
  useEffect(() => {
    new Date().getFullYear();
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <footer>
      <div>
        <img src={isfIcon} alt="Logo" width={120} />
      </div>
      <div id="newsletter">
        <h4>Newsletter</h4>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Em breve..."
            aria-label="Your email here"
            aria-describedby="button-addon2"
            disabled={true}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            disabled={true}
          >
            Subscreva
          </button>
        </div>
      </div>

      <div id="adress">
        <div id="social_buttons">
          <a
            href="https://www.linkedin.com/company/isel-formula-student/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/isel.formulastudent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/IselFormulaStudent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.tiktok.com/@iselformulastudent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktokIcon} alt="Tiktok" />
          </a>
        </div>
      </div>
      <div>
        <div>
          <h4>Localização</h4>
        </div>
        <Link
          className="link"
          to={{
            pathname:
              "https://www.google.pt/maps/place/Formula+Student+ISEL/@38.7558962,-9.1197376,17z/data=!3m2!4b1!5s0xd1933ccb3d99cbb:0x25e7acb8f39fe0ea!4m6!3m5!1s0xd1933ccbaea3de1:0x4bf418146da6916c!8m2!3d38.755892!4d-9.1171627!16s%2Fg%2F11f37xzb1y?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
          }}
          target="_blank"
        >
          <p>Rua Conselheiro Emídio Navarro, 1 1959-007 Lisboa</p>
        </Link>
      </div>
      <div id="footer_pages">
        <Link id="footer_privacypolicy" className="link" to="/pt">
          <h5>Página Principal</h5>
        </Link>
        <Link id="footer_privacypolicy" className="link" to="/pt/about_us">
          <h5>Sobre nós</h5>
        </Link>
        <Link id="footer_privacypolicy" className="link" to="/pt/ifs04">
          <h5>Carros</h5>
        </Link>
        <Link id="footer_privacypolicy" className="link" to="/pt/sponsors">
          <h5>Patrocinadores</h5>
        </Link>
        <Link id="footer_privacypolicy" className="link" to="/pt/contacts">
          <h5>Contactos</h5>
        </Link>
      </div>

      <div id="footer_container">
        <div>
          &copy; <span id="year"></span> ISEL FS - Associação de Estudantes de
          Engenharia
        </div>
        <span className="separator"></span>
        <Link
          id="footer_privacypolicy"
          className="link"
          to="/en/privacy_policy"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default FooterPt;
