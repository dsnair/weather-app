import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {/* extract object values */}
        {Object.keys(this.props.weather).map(k => (
          <p key={k}>
            {k}: {this.props.weather[k]}
          </p>
        ))}
      </div>
    );
  }
}

export default Weather;
