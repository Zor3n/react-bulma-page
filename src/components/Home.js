import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-halfheight">
          <div className="hero-body">
            <div className="">
              <p className="title">Hero title home page :D</p>
              <p className="subtitle">Hero subtitle</p>
            </div>
          </div>
        </section>
        <section className="section is-flex is-flex-direction-column is-align-items-center">
          <h1 className="title">Section</h1>
          <h2 className="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
      </div>
    );
  }
}
