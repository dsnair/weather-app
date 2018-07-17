import React from "react";
import "./Form.css";

// Stateless component:
// this.props becomes props, which is passed in as an argument
// 'this' refers to class and stateless components have no class

// Arrow functions automatically returns the statement block
const Form = props => (
  <React.Fragment>
    <h1>What's today's weather in your city?</h1>
    {/* onSubmit attribute calls fetchWeather() function */}
    <form onSubmit={props.fetchWeather}>
      <label htmlFor="city">City</label>
      <input type="text" name="city" placeholder="San Francisco" required />
      <label htmlFor="country">Country</label>
      <input type="text" name="country" placeholder="United States" required />
      <button>Find Weather</button>
    </form>
  </React.Fragment>
);

export default Form;
