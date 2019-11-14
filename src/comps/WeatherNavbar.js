import React from "react";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button
} from "reactstrap";
import CitySearch from './CitySearch';
import { connect } from 'react-redux';
import { updateUnit, getFavorite, getDefaultCity, loadCity, loadWeather, loadFavoriteWeather, setTrueFromFavorite } from '../actions';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import Favorites from './Favorites';


class WeatherNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      unitType: 'C',
      unit: 'true'

    };
  }
  componentDidMount() {
    const { getFavorite } = this.props;
    getFavorite();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      isTrue,
    } = this.props
    if (isTrue === false) {
      const {
        cityName,
        unit
      } = this.props
      if (cityName !== prevProps.cityName ||
        unit !== prevProps.unit) {
        const {
          loadCity
        } = this.props
        loadCity(this.props.cityName)
      }
      const {
        citysuggetions,
        loadWeather,
          loadCity
      } = this.props
      if (citysuggetions !== prevProps.citysuggetions) {
        for (let i = 0; i < this.props.citysuggetions.length; i++) {
          if (this.props.cityName === this.props.citysuggetions[i].LocalizedName) {
            loadWeather(this.props.citysuggetions[i].Key, this.props.unit)
            loadCity('');
            return
          } else {
            loadWeather('215854', this.props.unit)
            return
          }
        }
      }
    } /* else {
      const { setTrueFromFavorite } = this.props
      setTrueFromFavorite(false)
    } */
  }

  render() {
    return (
      <>
        <Navbar className="navigationFlex bg-transparent" expand="lg">
          <Container>
            <button
              className="navbar-toggler"
              id="navbarTogglerDemo01"
              type="button"
            >
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
            <UncontrolledCollapse navbar toggler="#navbarTogglerDemo01">
              <NavbarBrand href="/">
                Weather
            </NavbarBrand>
              <Nav className="mr-auto mt-2 mt-lg-0" navbar>
                <NavItem>
                  <NavLink href="/home">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/favorites" >
                    Favorites
                </NavLink>
                </NavItem>
              </Nav>
              <Button className="btn-round" color="primary" onClick={this.changeUnit.bind(this)}>°{this.state.unitType}</Button>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        <Router>

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/favorites" component={Favorites} />
            <Redirect from='/' to='/home' />
          </Switch>
        </Router>
      </>
    );
  }
  changeUnit() {
    if (this.state.unit === 'false') {
      this.setState({ unit: 'true' })
      this.setState({ unitType: 'C' })
    } else {
      this.setState({ unit: 'false' })
      this.setState({ unitType: 'F' })
    }
    const { updateUnit } = this.props
    updateUnit(this.state.unit)
  }



}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites.myFavorites,
    unit: state.unit.unit,
    cityName: state.cityName.cityName,
    citysuggetions: state.citySuggetions.citySuggetions,
    cityWeather: state.weather,
    isTrue: state.fromFavorites.isTrue


  }
}

const mapDispatchToProps = {

  updateUnit,
  getFavorite,
  loadFavoriteWeather,
  getDefaultCity,
  loadWeather,
  loadCity,
  setTrueFromFavorite
  // updateBook
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setBooks : () => dispatch(setBooks()),
//         // updateBook : (book) => dispatch(updateBook(book))
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(WeatherNavbar);