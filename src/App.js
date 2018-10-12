import React, { Component } from "react";
import Form from "./Form.js";
import Weather from "./Weather.js";
import "./App.css";

const API_KEY = "233f705c30c2444c805396c28b078a89";

class App extends Component {
  state = { results: null, error: false };
  fetchWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;
    try {
      const request = await fetch(url);
      const response = await request.json();
      // update state
      this.setState({
        results: {
          cond: response.weather[0].main,
          iconId: `wi wi-owm-${response.weather[0].id}`,
          city: response.name,
          temp: `${Math.round(response.main.temp)}`,
          windspeed: `${Math.round(response.wind.speed)} mph`,
          humidity: `${Math.round(response.main.humidity)}%`
        },
        error: false
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  renderError() {
    if (this.state.error) {
      return (
        <span className="error">Something went wrong. Please try again.</span>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderError()}
        <Form fetchWeather={this.fetchWeather} />
        {this.state.results && (
          <Weather weather={this.state.results} error={this.state.error} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
