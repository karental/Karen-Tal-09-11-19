import React from 'react';
import './App.css';
import WeatherNavbar from './comps/WeatherNavbar';
import { connect } from 'react-redux';
import { getDefaultCity } from './actions';
var Night = require('./back.jpg');
var Day = require('./day.jpg');

class App extends React.Component {

  componentDidMount() {
    const { getDefaultCity } = this.props;
    getDefaultCity()

    var now = new Date();
    var hour = now.getHours();
    if (hour > 4 && hour < 18) {
      document.body.style.backgroundImage = 'url(' + Day + ')';

    } else {
      document.body.style.backgroundImage = 'url(' + Night + ')';
    }


  }
  render() {
    return (
      <>
        <WeatherNavbar />
      </>);
  }
}

const mapStateToProps = (state) => {
  return {
    cityName: state.cityName.cityName,
  }
}

const mapDispatchToProps = {
  getDefaultCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);