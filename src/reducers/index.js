import { combineReducers } from 'redux';
import  weatherReducer  from './weatherReducer';
import  cityAutoCompleteReducer  from './cityAutoCompleteReducer';
import  cityKeyReducer  from './cityKeyReducer';
import  unitReducer  from './unitReducer';
import  cityNameReducer  from './cityNameReducer';
import  FavoritesReducer  from './FavoritesReducer';
import  LocalStorageReducer  from './getLocalStorage';
import favoritesWeatherReducer from './favoritesWeatherReducer';
import fromFavoReducer from './FromFavo';



const allReducers = combineReducers({
    weather: weatherReducer,
    citySuggetions: cityAutoCompleteReducer,
    cityKey: cityKeyReducer,
    unit: unitReducer,
    cityName: cityNameReducer,
    Favorites: FavoritesReducer,
    myFavorites: LocalStorageReducer,
    favoritesWeather: favoritesWeatherReducer,
    fromFavorites:fromFavoReducer
}
);

export default allReducers;