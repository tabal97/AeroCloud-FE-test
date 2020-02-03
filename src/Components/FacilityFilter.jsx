import React, { Component } from 'react';

class FacilityFilter extends Component {
    state = { facility: "" }
    render() {
        const { facility } = this.state
        return (
            <div>
                <h4>Facility:</h4>
                <select value={facility}>
                    <option selected value="">All</option>
                    <option value="gym">Gym</option>
                    <option value="pool">Pool</option>
                    <option value="car park">Car Park</option>
                    <option value="free wifi">Free WiFi</option>

                </select></div>);
    };
}

export default FacilityFilter;