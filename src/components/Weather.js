import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <section className="weather">
        {/* extract object values */}
        {Object.keys(this.props.weather).map(k => (
          <p key={k}>
            {this.props.weather[k]}
          </p>
        ))}
        <img src={this.props.weather.icon} alt="weather icon" />
      </section>
    );
  }
}

export default Weather;
