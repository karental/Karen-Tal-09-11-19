import React from 'react';
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { loadWeather } from '../actions';
import Loading from './Loading';

class Daily extends React.Component {


    render() {
        if (this.props.currweather.length === 0) {
            return (
                <>
                    <Loading />
                </>
            )
        } else {
            return (

                this.props.currweather.DailyForecasts.map(w =>
                    <Card className='dailyContainer'>
                        <CardBody>
                            <CardTitle>{w.weekday}</CardTitle>
                            <CardText><img alt="icon" src={w.Day.Icon}></img>
                            </CardText>
                            <CardText>{w.Temperature.Minimum.Value} °{w.Temperature.Minimum.Unit} </CardText>
                        </CardBody>
                    </Card>
                )
            );
        }
    }
}


const mapStateToProps = (state) => {
    return {
        currweather: state.weather.weather,
    }
}

const mapDispatchToProps = {
    loadWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Daily);