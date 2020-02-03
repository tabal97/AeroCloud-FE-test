import React, { Component } from 'react';
import * as filter from "../utils/utilFunctions"
import NameFilter from './NameFilter.jsx';
import RatingFilter from './RatingFilter';
import FacilityFilter from './FacilityFilter';
const hotelsArray = require("../utils/hotels.json");


class HotelLister extends Component {
    state = { hotels: [], err: false }
    render() {
        const { hotels } = this.state;
        const { nameChanged, ratingChanged } = this;
        return (<div>
            <NameFilter hotels={hotels} nameChanged={nameChanged} />
            <RatingFilter hotels={hotels} ratingChanged={ratingChanged} />
            <FacilityFilter />
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
    ratingChanged = (rating) => {
        const newHotels = filter.searchByRating(rating, hotelsArray);
        this.setState({ hotels: newHotels })
    }
}

export default HotelLister;