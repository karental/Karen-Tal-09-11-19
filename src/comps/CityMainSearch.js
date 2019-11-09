import React from "react";
import {
    Input
} from "reactstrap";

class CityMainSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityInput: "",
            suggestions: [],
            cityKey: ''
        };
    }
    render() {

        return (
            <>
                <Input
                    type="text"
                    placeholder="Enter City"
                    onChange={this.handleText.bind(this)}
                >
                </Input>

                <ul className='input'>
                    {this.state.suggestions.map(c =>
                        <li key={c.key} onClick={this.clickedText.bind(this, c.Key)}>{c.LocalizedName}</li>

                    )}
                </ul>
            </>
        );
    }
    handleText(ev) {
        this.state.cityInput = ev.target.value;
        this.getCity()

    }
    getCity() {
        console.log(this.state.cityInput)

        if (this.state.cityInput === '') {
            console.log('yes');
            this.setState({ suggestions: [] });

        } else {
            fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=gl5hH8RBGuV1KsPKXfDNtpVVOiSarSp3&q=${this.state.cityInput}`)
                .then(r => r.json())
                .then(data => {
                    console.log(data);
                    this.setState({ suggestions: data });
                });
        }
    }
    clickedText(key, ev) {
        debugger
        console.log(key);
        this.setState({ cityKey: key })
        this.setState({ city: ev.target.innerHTML })
        this.setState({ cityInput: ev.target.innerHTML })
        this.setState({ suggestions: [] });
    }
}
export default CityMainSearch;