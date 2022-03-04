import React, { Component } from "react";
import ifs02_1 from "../images/ifs02_1.webp";

export default class Form extends Component {
  render() {
    return (
      <div class="container dual right">
        <div class="text_wrapper">
          <h2>Contact us</h2>

          <form
            name="contact"
            method="post"
          >
            <input placeholder="Name" class="input" name="name" type="text" />
            <input
              placeholder="Email"
              class="input"
              name="email"
              type="email"
            />
            <input
              placeholder="Subject"
              class="input"
              name="subject"
              type="text"
            />
            <textarea placeholder="Message" name="message"></textarea>

            <button type="submit">
              <a href="javascript:void(0);" class="parallelogram center">
                <div class="orange_detail"></div>
                <div class="text">Send</div>
              </a>
            </button>
          </form>
        </div>

        <div class="image_wrapper">
          <img src={ifs02_1} alt="IFS01" />
        </div>
      </div>
    );
  }
}
