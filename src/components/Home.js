import React, { Component } from "react";
import Logo from '../logo.svg';

export default class Home extends Component {
  render() {
    function createServicesTable() {
      const servicesTable = [];

      for (let index = 0; index < 2; index++) {
        const row = [];
        for (let index = 0; index < 3; index++) {
          row.push(
            <td>
              <div class="card is-flex is-flex-direction-column is-align-items-center">
                <div class="card-image">
                  <figure class="image is-128x128 is-flex">
                    <img
                      src={Logo}
                      alt="Placeholder image"
                    ></img>
                  </figure>
                </div>
                <div class="card-content has-text-centered">
                  <div className="title">Development</div>
                  <div class="subtitle">
                    Lorem ipsum leo risus, porta ac consectetur ac pite.
                  </div>
                </div>
              </div>
            </td>
          );
        }
        servicesTable.push(<tr className="my-3">{row}</tr>);
      }

      return servicesTable;
    }

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
        <section className="section has-text-centered">
          <h1 className="title">Services</h1>
          <h2 className="subtitle">
            What do we have to offer? Check out all our services!
          </h2>
        </section>
        <table className="table">
          <thead></thead>
          <tbody>{createServicesTable()}</tbody>
        </table>
      </div>
    );
  }
}
