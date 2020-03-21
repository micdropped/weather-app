import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

class App extends Component {

  state = {
    value: '',
    date: '',
    timezone: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    }
    );
  }

  componentDidUpdate(prevState) {

    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=8f54c8f2afeec2a1b44ac82fe9f2ca7e&units=metric`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("coś nie pykło")
        })
        .then(response => response.json())
        .then(data => {
          const currentDate = new Date().toLocaleString();
          this.setState(state => ({
            date: currentDate,
            city: state.value,
            timezone: data.timezone,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
          }))
        })
        .catch(err => {
          console.log(err);
          this.setState(state => ({
            err: true,
            city: state.value,
          }))
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;