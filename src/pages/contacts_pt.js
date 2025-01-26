import React from "react";

import Header from "../components/header_pt";
import Footer from "../components/footer_pt";

import imageIfsTeam from "../images/ifs_team.webp";

function ContactsPt() {
  return (
    <div>
      <Header />

      

      <article>
        <h1>CONTACTOS</h1>

        <div className="container-fluid">
          <div className="text_wrapper">
            <h2>Email</h2>
            <p>
              <a className="link" href="mailto:formulastudent@isel.pt">
                formulastudent@isel.pt
              </a>
            </p>
          </div>

          <form
            className="row g-3"
            target="_blank"
            method="POST"
            action="https://formsubmit.co/formulastudent@isel.pt"
          >
            <div className="col-9">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Insira o seu email"
                required
              />

              <label for="name" className="form-label">
                Nome da entidade
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Insira o nome da sua entidade"
                required
              />

              <label for="message" className="form-label">
                A sua mensagem
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Escreva algo..."
                style={{ width: "full" }}
              ></textarea>
              <button type="submit" className="btn btn-secondary w-100">
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
