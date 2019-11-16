import React from 'react';
import MainCard from './MainCard'
import Daily from './DailyCards'
import { connect } from 'react-redux';
import CitySearch from './CitySearch';

class HomePage extends React.Component {


  render() {
    return (
      <>
        <div className='mainDivContainer'>
          <div className='citySearchContainer'>
            <CitySearch />
          </div>
          <MainCard />
          <div className='dailyCardsContainer'>
            <Daily />
          </div>
        </div>
      </>);
  }
} const mapStateToProps = (state) => {
  return {
    currweather: state.weather.weather,
    favorites: state.myFavorites.myFavorites,
    currCity: state.cityName.cityName,

  }
}

const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
