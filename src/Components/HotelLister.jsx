import React, { Component } from 'react';
import * as filter from "../utils/utilFunctions"
import NameFilter from './NameFilter.jsx';
import RatingFilter from './RatingFilter';
import FacilityFilter from './FacilityFilter';
import styles from "../Styles/HotelLister.module.css"
const hotelsArray = require("../utils/hotels.json");


class HotelLister extends Component {
    state = { hotels: [], err: false }
    render() {
        const { hotels, err } = this.state;
        const { nameChanged, ratingChanged, facilityChanged, resetFilters } = this;
        return (<div className={styles.grid}>
            <div className={styles.filters}>
                <NameFilter hotels={hotels} nameChanged={nameChanged} />
                <RatingFilter hotels={hotels} ratingChanged={ratingChanged} />
                <FacilityFilter hotels={hotels} facilityChanged={facilityChanged} />
                <button onClick={resetFilters}>Reset Filters!</button>
            </div>
            <br />
            {err ? <h3>Hotel Not Found</h3> :
                <ul>
                    {hotels.map(hotel => {
                        return <li style={{ fontSize: 20 }}>{`Name: ${hotel.name} || Rating: ${hotel.starRating} || ${hotel.facilities}`}</li>
                    })}
                </ul>

            }
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
    facilityChanged = (facility) => {
        const { hotels } = this.state;
        const newHotels = filter.searchByFacility(facility, hotels);
        this.setState({ hotels: newHotels })
    }
    resetFilters = () => {
        this.setState({ hotels: hotelsArray, err: false })
    }
}

export default HotelLister;