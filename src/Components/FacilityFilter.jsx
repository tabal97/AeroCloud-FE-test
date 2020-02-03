import React, { Component } from 'react';

class FacilityFilter extends Component {
    state = { facility: "" }
    render() {
        const { facility } = this.state
        return (
            <div>
                <h4>Facility:</h4>
                <select value={facility} onChange={this.handleChange}>
                    <option selected value="" disabled>All</option>
                    <option value="gym">Gym</option>
                    <option value="pool">Pool</option>
                    <option value="car park">Car Park</option>
                    <option value="free wifi">Free WiFi</option>
                </select></div>);
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            facility: value
        })
        this.props.facilityChanged(value);
        this.setState({ facility: "" })
    }
}

export default FacilityFilter;