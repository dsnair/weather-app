import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Find out today's weather in your city</h1>
        {/* onSubmit attribute calls fetchWeather() function */}
        <form onSubmit={this.props.fetchWeather}>
          <input type="text" name="city" id="city" placeholder="San Francisco" required />
          <input type="text" name="country" id="country" placeholder="US" required />
          <button>Find Weather!</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
