import React from "react";

import Header from "../components/header_pt";
import Footer from "../components/footer_pt";

import imageIfsTeam from "../images/ifs_team.webp";

function ContactsPt() {
  return (
    <div>
      <Header />

      <img
        className="cover"
        src={imageIfsTeam}
        alt="Equipa ISEL Formula Student"
      />

      <article>
        <h1>CONTACTOS</h1>

        <div className="container">
          <div className="text_wrapper">
            <h2>Email</h2>
            <p>
              <a className="link" href="mailto:formulastudent@isel.pt">
                formulastudent@isel.pt
              </a>
            </p>
          </div>
          <form
            class="row g-3 text_wrapper"
            target="_blank"
            method="POST"
            action="https://formsubmit.co/formulastudent@isel.pt"
          >
            <div class="col-12">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                name="email"
                placeholder="Insira o seu email"
                required
              />
            </div>

            <div class="col-12">
              <label for="inputPassword4" class="form-label">
                Nome
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Insira a sua password"
                required
              />
            </div>

            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label">
                A sua mensagem
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="exampleTextarea"
                rows="3"
                placeholder="Escreva algo"
              ></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-secondary w-100">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default ContactsPt;
