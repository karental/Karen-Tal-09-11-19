import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
import { connect } from 'react-redux';
import { addFavorite } from '../actions';

class MainCard extends React.Component {
  state = {
    addToFavorites: "Add to Favorites",
    disabled: false
  }

  render() {
    debugger
    if (this.props.currweather.length === 0) {
      return (
        <>
          <div></div>
        </>
      )
    } else {
      debugger
      return (
        <>
          <Card className='maincardDiv'>
            <CardBody>
              <CardTitle tag="h3">{this.props.currCity}</CardTitle>
              <CardSubtitle className="mb-2 ">
                {this.props.currweather.Headline.Text}
              </CardSubtitle>
              <img src={this.props.currweather.DailyForecasts[0].Day.Icon}></img>
              <CardText><h4>{this.props.currweather.DailyForecasts[0].Temperature.Minimum.Value} °{this.props.currweather.DailyForecasts[0].Temperature.Minimum.unit} </h4></CardText>
              <Button disabled={this.state.disabled} className="btn-round" color="primary" onClick={this.addToFavorite.bind(this)}>
                {this.state.addToFavorites}
                <i className="fa fa-heart" />
              </Button>
            </CardBody>
          </Card>
        </>
      );
    }
  }

  addToFavorite() {
    var myCity = {
      name: this.props.currCity,
      key: this.props.currweather.cityKey
    }
    var myFavoritesArr = this.props.favorites;
    if (typeof myFavoritesArr == "string") {
      myFavoritesArr = JSON.parse(myFavoritesArr)
    }
    const { addFavorite } = this.props;
    myFavoritesArr.push(myCity)
    addFavorite(myFavoritesArr);
    this.setState({ addToFavorites: 'Added!' })
  }
}

const mapStateToProps = (state) => {
  return {
    currweather: state.weather.weather,
    currCity: state.cityName.cityName,
    favorites: state.myFavorites.myFavorites,
    unit: state.unit.unit,

  }
}

const mapDispatchToProps = {
  addFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(MainCard);


