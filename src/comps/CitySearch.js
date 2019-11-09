import React from "react";
import {
    FormGroup,
    Form,
    Input,
    Button
} from "reactstrap";


class CitySearch extends React.Component {

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
                <Form className="form-inline ml-auto" data-background-color="">
                    <FormGroup className="has-white">
                        <div className='autocomplete'>
                            <Input
                                onChange={this.handleText.bind(this)}
                                placeholder="Search"
                                type="text"
                                name='cityInput'
                                value={this.state.cityInput}
                            ></Input>
                            <ul id='input'>
                                {this.state.suggestions.map(c =>
                                    <li className='autoText' onClick={this.clickedText.bind(this, c.Key)}>{c.LocalizedName}</li>
                                )}
                            </ul>
                        </div>
                        <Button>Search</Button>
                    </FormGroup>
                </Form>
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


export default CitySearch;