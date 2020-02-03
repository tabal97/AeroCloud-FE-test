import React, { Component } from 'react';
const hotelsArray = require("../utils/hotels.json");
// import * as filter from "../utils/utilFuncs"


class HotelLister extends Component {
    state = {}
    render() {
        return (<ul>{hotelsArray.map(hotel => {
            return <li>{hotel.name}</li>
        })}</ul>);
    }
}

export default HotelLister;