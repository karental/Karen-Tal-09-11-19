import React from 'react';
import './App.css';
import WeatherNavbar from './comps/WeatherNavbar';
import MainCard from './comps/MainCard'
import CityMainSearch from './comps/CityMainSearch'
import Daily from './comps/DailyCards'

function App() {
  return (
<>
<WeatherNavbar />

<div className='mainDivContainer'>
<CityMainSearch/>
<MainCard />
<Daily/>
</div>
</>  );
}

export default App;
