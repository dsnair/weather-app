import React, { Component } from "react";
import "./Weather.css";

// extract object values
class Weather extends Component {
  render() {
    return (
      <section className="weather">
        {!this.props.error
          ? Object.keys(this.props.weather).map(k => (
              <p key={k}>{this.props.weather[k]}</p>
            ))
          : ""}
      </section>
    );
  }
}

export default Weather;
