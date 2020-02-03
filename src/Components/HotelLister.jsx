import React, { Component } from 'react';
const hotelsArray = require("../utils/hotels.json");
// import * as filter from "../utils/utilFuncs"


class HotelLister extends Component {
    state = { hotels: [] }
    render() {
        const { hotels } = this.state;
        return (<ul>{hotels.map(hotel => {
            return <li>{hotel.name}</li>
        })}</ul>);
    }
    componentDidMount() {
        this.setState({ hotels: hotelsArray })
    }
}

export default HotelLister;