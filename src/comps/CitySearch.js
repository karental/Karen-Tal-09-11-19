import React from "react";
import {
    FormGroup,
    Form,
    Input,
    Button
} from "reactstrap";
import { connect } from 'react-redux'
import { loadCity, getCityName, loadWeather, setTrueFromFavorite } from '../actions'


class CitySearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityKey: "",
            searchInput: '',
            showing: false
        };
    }

    render() {
        return (
            <>
                <Form style={{ margin: 'auto', width: '100rem' }} className="form-inline ml-auto" data-background-color="">
                    <FormGroup style={{ margin: 'auto', display: 'inline' }} className="has-white">
                        <div className='autocomplete'>
                            <Input
                                onChange={this.handleText.bind(this)}
                                placeholder="Search"
                                type="text"
                                name='cityInput'
                                className='cityInput'
                                value={this.state.searchInput}
                                style={{ width: '50rem' }}
                            ></Input>
                            <ul id='input'>
                                {this.props.citysuggetions.map(c =>
                                    <li className='autoText' onClick={this.clickedText.bind(this, c.Key)}>{c.LocalizedName}</li>
                                )}
                            </ul>

                        </div>
                        <Button className='searchButton' color="primary" onClick={this.getweather.bind(this)}>
                            <i className="fas fa-search"></i>
                        </Button>
                        <div style={{ display: (this.state.showing ? 'block' : 'none') }} >
                            <h6>  Oops, can't find your location      </h6>    </div>
                    </FormGroup>

                </Form>

            </>
        );
    }
    handleText(ev) {
        this.setState({ showing: false })
        this.setState({ searchInput: ev.target.value })
        const { loadCity, setTrueFromFavorite } = this.props;
        loadCity(ev.target.value);
        setTrueFromFavorite(true);

    }


    clickedText(key, ev) {
        this.setState({ searchInput: ev.target.innerHTML })
        this.setState({ cityKey: key })
        this.setState({ city: ev.target.innerHTML })
        this.setState({ cityInput: ev.target.innerHTML })
    }

    getweather() {
        if (this.state.cityKey === "" || this.state.cityKey !== this.state.cityKey) {
            for (let i = 0; i < this.props.citysuggetions.length; i++) {
                if (this.state.searchInput === this.props.citysuggetions[i].LocalizedName) {
                    this.state.cityKey = this.props.citysuggetions[i].Key
                    break
                } else {
                }
            }
        }
        if (this.state.cityKey === "") {
            this.setState({ showing: true })
        } else {
            const { loadWeather, getCityName } = this.props
            getCityName(this.state.searchInput);
            this.setState({ searchInput: '' })
            loadWeather(this.state.cityKey, this.props.unit)
            const { loadCity } = this.props;
            loadCity('');
        }
    }
}
const mapStateToProps = (state) => {
    return {
        citysuggetions: state.citySuggetions.citySuggetions,
        cityWeather: state.weather,
        unit: state.unit.unit,
        cityName: state.cityName.cityName

    }
}

const mapDispatchToProps = {
    loadWeather,
    loadCity,
    getCityName,
    setTrueFromFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySearch);
