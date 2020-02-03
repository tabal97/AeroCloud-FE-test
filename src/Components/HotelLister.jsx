import React, { Component } from 'react';
import NameFilter from './NameFilter.jsx';
const hotelsArray = require("../utils/hotels.json");
// import * as filter from "../utils/utilFuncs"


class HotelLister extends Component {
    state = { hotels: [] }
    render() {
        const { hotels } = this.state;
        return (<div>
            <NameFilter />
            <ul>{hotels.map(hotel => {
                return <li>{hotel.name}</li>
            })}</ul>
        </div>);
    }
    componentDidMount() {
        this.setState({ hotels: hotelsArray })
    }
}

export default HotelLister;