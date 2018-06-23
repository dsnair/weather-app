import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "233f705c30c2444c805396c28b078a89";

class App extends Component {
  state = {}; // initial state is empty object
  fetchWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`;
    const request = await fetch(url);
    const response = await request.json();
    this.setState({
      temperature: response.main.temp,
      condition: response.weather[0].main,
      humidity: response.main.humidity,
      windSpeed: response.wind.speed,
      city: response.name
    });
  };

  render() {
    return (
      <div>
        {/* Lifting state up: pass down fetchWeather() from App (parent) to Form (children) as prop & state from App to Weather */}
        <Form fetchWeather={this.fetchWeather} />
        <Weather weather={this.state} />
      </div>
    );
  }
}

export default App;
