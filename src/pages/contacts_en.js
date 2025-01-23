import React from "react";

import Header from "../components/header_en";
import Footer from "../components/footer_en";

import imageIfsTeam from "../images/ifs_team.webp";

function ContactsEn() {
  return (
    <div>
      <Header />

      <img
        className="cover"
        src={imageIfsTeam}
        alt="ISEL Formula Student Team"
      />

      <article>
        <h1>CONTACTS</h1>

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
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="col-12">
              <label for="inputPassword4" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Enter your password"
                required
              />
            </div>

            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label">
                Write your message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                name="exampleTextarea"
                rows="3"
                placeholder="Write something here..."
              ></textarea>
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-secondary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default ContactsEn;
