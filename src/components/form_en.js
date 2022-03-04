import React, { Component } from "react";
import ifs02_1 from "../images/ifs02_1.webp";

export default class Form extends Component {
  constructor() {
    super();
    this.state = { name: "", email: "", subject: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(event) {
    alert("Debug: name-" + this.state.name); // TODO Form Submission
    event.preventDefault();
  }

  render() {
    return (
      <div class="container dual right">
        <div class="text_wrapper">
          <h2>Contact us</h2>

          <form name="contact" method="post" netlify>
            <input
              placeholder="Name"
              class="input"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              placeholder="Email"
              class="input"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              placeholder="Subject"
              class="input"
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <div data-netlify-recaptcha="true"></div>
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
