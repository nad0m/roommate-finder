import React from 'react';

class LocationField extends React.Component {

    constructor(props) {
        super(props);
        this.locationInput = React.createRef();
    }

    componentDidMount() {
        const options = {
            types: ['(cities)'],
            componentRestrictions: {country: "us"}
        };
        this.autocomplete = new window.google.maps.places.Autocomplete(this.locationInput.current, options);
        window.google.maps.event.addListener(this.autocomplete, 'place_changed', () => this.props.onLocationSelect(this.locationInput.current));
    }

    render() {

        return( 
            <div className="ten wide field">
                <label className="field-label">Location</label>
                <input 
                    ref={this.locationInput}
                    name="location-input"
                    type="text" 
                    placeholder="City & State" 
                    value={this.props.value ? this.props.value : ""}
                    onChange={this.props.onInputChange} 
                />
            </div>
        );
    }
}

export default LocationField;