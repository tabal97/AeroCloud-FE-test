import React, { Component } from 'react';
import * as filter from "../utils/utilFunctions"
import NameFilter from './NameFilter.jsx';
import RatingFilter from './RatingFilter';
const hotelsArray = require("../utils/hotels.json");


class HotelLister extends Component {
    state = { hotels: [], err: false }
    render() {
        const { hotels } = this.state;
        const { nameChanged } = this;
        return (<div>
            <NameFilter hotels={hotels} nameChanged={nameChanged} />
            <RatingFilter />
            <ul>{hotels.map(hotel => {
                return <li>{hotel.name}</li>
            })}</ul>
        </div>);
    }
    componentDidMount() {
        this.setState({ hotels: hotelsArray })
    }
    nameChanged = (name) => {
        const { hotels } = this.state;
        const newHotel = filter.searchByName(name, hotels);
        if (newHotel.msg) { this.setState({ err: true }) }
        else this.setState({ hotels: [newHotel] })
    }
}

export default HotelLister;