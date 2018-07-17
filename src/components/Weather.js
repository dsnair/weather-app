import React from "react";
import "./Weather.css";

// Extract API response values
const Weather = props =>
  <section className="weather">
    <i id="icon" className={props.weather.iconId} />
    <span id="cond">{props.weather.cond}</span>
    <p className="row1">
      <span id="city">{props.weather.city}</span>
      <span id="temp">
        {props.weather.temp} 
        <i id="units" className="wi wi-fahrenheit" />
      </span>
    </p>
    <p className="row2">
      <span id="windspeed">{props.weather.windspeed}</span>
      <span>Wind Speed</span>
      <span id="humidity">{props.weather.humidity}</span>
      <span>Humidity</span>
    </p>
  </section>

export default Weather;
