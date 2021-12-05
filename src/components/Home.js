import React, { Component } from "react";
import Logo from "../logo.svg";

export default class Home extends Component {
  render() {
    const keys = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const services = [
      ["Development", "Account", "Security"],
      ["Prom", "Pearl", "Ending"],
    ];

    const createServicesTable = () => {
      const servicesTable = [];

      for (let indexR = 0; indexR < 2; indexR++) {
        const row = [];
        for (let indexC = 0; indexC < 3; indexC++) {
          row.push(
            <td key={keys[indexR][indexC]}>
              <div className="card is-flex is-flex-direction-column is-align-items-center">
                <div className="card-image">
                  <figure className="image is-128x128 is-flex">
                    <img src={Logo} alt="React logo"></img>
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <div className="title">{services[indexR][indexC]}</div>
                  <div className="subtitle">
                    Lorem ipsum leo risus, porta ac consectetur ac pite.
                  </div>
                </div>
              </div>
            </td>
          );
        }
        servicesTable.push(
          <tr key={indexR} className="my-3">
            {row}
          </tr>
        );
      }

      return servicesTable;
    };

    return (
      <div>
        <section className="hero is-medium is-info has-text-centered">
          <div className="hero-body">
            <p className="title">Welcome to Parctuckings!</p>
            <p className="subtitle">Take a look of all our services!</p>
          </div>
        </section>
        <section className="section has-text-centered">
          <h1 className="title is-size-3">Services</h1>
          <h2 className="subtitle is-size-4">
            What do we have to offer? Check out all our services!
          </h2>
        </section>
        <table className="table">
          <thead></thead>
          <tbody>{createServicesTable()}</tbody>
        </table>

        <section className="section has-text-centered">
          <h1 className="title is-size-3">Who we are</h1>
          <h2 className="subtitle is-size-4">A little of our history!</h2>
          <div className="box">
            <div className="block is-size-5">
              This text is within a <strong>second block</strong>. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
              amet massa fringilla egestas. Nullam condimentum luctus turpis.
              This text is within a <strong>second block</strong>. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
              amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </div>
            <div className="block is-size-5">
              This text is within a <strong>second block</strong>. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
              amet massa fringilla egestas. Nullam condimentum luctus turpis.
            </div>
          </div>
        </section>

        <section className="section has-text-centered">
          <h1 className="title is-size-3">Messages</h1>
          <h2 className="subtitle is-size-4">Read what our customers think!</h2>
        </section>

      </div>
    );
  }
}
