import axios from 'axios';

function setUnit(unit) {
    return {
        type: "SET_UNIT",
        unit
    }
}

export const updateUnit = (unit) => {

    return dispatch => {
        dispatch(setUnit(unit))
    }
}


function cameFromFavorites(isTrue) {
    return {
        type: "SET_TRUE",
        isTrue
    }
}

export const setTrueFromFavorite = (isTrue) => {
    return dispatch => {
        dispatch(cameFromFavorites(isTrue))
    }
}


function setWeather(weather) {
    return {
        type: 'SET_WEATHER',
        weather
    }
}


export const loadWeather = (key, unit) => {
    return dispatch => {
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=hwxDTxNOPGPd7zeoqPEikNUDPmD0vtLG&metric=${unit}`)
            .then(r => r.data)
            .then(weather => {
                weather.cityKey = key
                for (let i = 0; i < weather.DailyForecasts.length; i++) {
                    var icon = weather.DailyForecasts[i].Day.Icon
                    icon = icon.toString().length
                    if (icon === 1) {
                        weather.DailyForecasts[i].Day.Icon = `https://developer.accuweather.com/sites/default/files/0${weather.DailyForecasts[i].Day.Icon}-s.png`
                    } else {
                        weather.DailyForecasts[i].Day.Icon = `https://developer.accuweather.com/sites/default/files/${weather.DailyForecasts[i].Day.Icon}-s.png`
                    }
                    var timestamp = weather.DailyForecasts[i].EpochDate;
                    var date = new Date();
                    date.setTime(timestamp * 1000);
                    date.toUTCString()
                    var day = date.getDay();
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    days.map(d => {
                        if (day === days.indexOf(d)) {
                            let weekday = d;
                            weather.DailyForecasts[i].weekday = weekday
                        }
                    })
                }
                dispatch(setWeather(weather))
            })
    }
}




function setCityAutocomplete(citySuggtions) {
    return {
        type: 'SET_SUGGETIONS',
        citySuggtions
    }
}

export const loadCity = (city) => {
    return dispatch => {
        if (city === '') {
            var citySuggtions = []
            dispatch(setCityAutocomplete(citySuggtions))
        } else {
            axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=hwxDTxNOPGPd7zeoqPEikNUDPmD0vtLG&q=${city}`)
                .then(r => r.data)
                .then(data => {
                    dispatch(setCityAutocomplete(data))
                })


        }
    }
}


function setCityName(cityName) {
    return {
        type: 'GET_CITY_NAME',
        cityName
    }
}

export const getCityName = (Name) => {
    return dispatch => {
        if (Name === '') {
        } else {
            dispatch(setCityName(Name))
        }
    }
}

export const getDefaultCity = () => {
    return dispatch => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=45745db3561e4f719d66692dee37f7d6&language=en`)
                .then(r => r.data)
                .then(data => {
                    dispatch(setCityName(data.results[0].components.residential))
                });
        });
    }
}


export const addFavorite = (favorite) => {
    return dispatch => {
        if (!favorite.length) {
            localStorage.removeItem('MyFavorites');
            dispatch(getFavoritesFromLocalStorage(favorite))
            return
        } else {
            var favoriteSTR = JSON.stringify(favorite)
            localStorage.setItem('MyFavorites', favoriteSTR);
            dispatch(getFavoritesFromLocalStorage(favorite))
        }
    }
}


function getFavoritesFromLocalStorage(myFavorites) {
    return {
        type: 'GET_FAVORITES',
        myFavorites
    }
}

export const getFavorite = () => {
    return dispatch => {
        var favoritesFromStorage = []
        if (localStorage.getItem('MyFavorites') === null) {
            dispatch(getFavoritesFromLocalStorage(favoritesFromStorage))
        } else {
            var favoritesArrayFromStorage = localStorage.getItem('MyFavorites')
            favoritesArrayFromStorage = JSON.parse(favoritesArrayFromStorage)
            dispatch(getFavoritesFromLocalStorage(favoritesArrayFromStorage))
        }
    }
}

function getFavoritesWeather(favoritesWeather) {
    return {
        type: 'GET_FAVORITES_WEATHER',
        favoritesWeather
    }
}

export const loadFavoriteWeather = (favoriteKeys, unit) => {
    return dispatch => {
        var favoritesWeather = []
        for (let i = 0; i < favoriteKeys.length; i++) {
            axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${favoriteKeys[i].key}?apikey=hwxDTxNOPGPd7zeoqPEikNUDPmD0vtLG&metric=${unit}`)
                .then(r => r.data)
                .then(weather => {
                    weather.DailyForecasts[0].city = favoriteKeys[i].name
                    weather.DailyForecasts[0].key = favoriteKeys[i].key

                    for (let i = 0; i < weather.DailyForecasts.length; i++) {
                        var icon = weather.DailyForecasts[i].Day.Icon
                        icon = icon.toString().length
                        if (icon === 1) {
                            weather.DailyForecasts[i].Day.Icon = `https://developer.accuweather.com/sites/default/files/0${weather.DailyForecasts[i].Day.Icon}-s.png`
                        } else {
                            weather.DailyForecasts[i].Day.Icon = `https://developer.accuweather.com/sites/default/files/${weather.DailyForecasts[i].Day.Icon}-s.png`
                        }
                        favoritesWeather.push(weather)
                        if (favoritesWeather.length !== favoriteKeys.length) {
                        } else {
                            dispatch(getFavoritesWeather(favoritesWeather))
                        }
                    }
                })

        }
    }

}
