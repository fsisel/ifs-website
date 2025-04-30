import React from "react";

import Header from "../components/header_en";
import Footer from "../components/footer_en";

function ContactsEn() {
  return (
    <div>
      <Header />

      <article>
        <h1>CONTACTS</h1>

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
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                name="email"
                placeholder="Enter your email"
                required
              />

              <input type="hidden" name="_cc" value="joao.miguel@iselfs.pt"></input>
              <input type="hidden" name="_next" value="https://formulastudent.isel.pt/en"></input>

              <label for="Entity" className="form-label">
                Entity Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Entity"
                name="Entity"
                placeholder="Enter your entity name"
                required
              />

              <label for="message" className="form-label">
                Write your message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Write something here..."
                required
              ></textarea>
              <div class="col-md-6 offset-md-3">
                <button type="submit" className="btn-sub w-100 ">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default ContactsEn;
