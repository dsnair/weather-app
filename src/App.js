import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "233f705c30c2444c805396c28b078a89";

class App extends Component {
  state = { results: {}, error: false }; // initial state is empty object
  fetchWeather = async event => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;
    try {
      const request = await fetch(url);
      const response = await request.json();
      this.setState({
        results: {
          condition: response.weather[0].main,
          city: response.name,
          temperature: `${response.main.temp}\xB0F`,
          windspeed: `${response.wind.speed}mph`,
          humidity: `${response.main.humidity}%`
        },
        error: false
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  renderError() {
    if (this.state.error) {
      return <h1>Something went wrong. Please try again.</h1>;
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderError()}
        {/* Lifting state up: pass down fetchWeather() from App (parent) to Form (children) as prop & state from App to Weather */}
        <Form fetchWeather={this.fetchWeather} />
        <Weather weather={this.state.results} error={this.state.error} />
      </React.Fragment>
    );
  }
}

export default App;