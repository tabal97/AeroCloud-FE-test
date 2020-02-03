const searchByName = (name, hotels) => {
    if (name) {
        const [hotelsFound] = hotels.filter(hotel => {      // pure function thus, does not mutate input data
            return hotel.name === name
        })
        if (!hotelsFound) return { msg: "hotel not found" }
        return hotelsFound
    } else return [...hotels]
}

const searchByFacility = (facility, hotels) => {
    if (!facility) return [...hotels]
    return hotels.reduce((tot, hotel) => {
        hotel.facilities.filter(e => {
            if (e === facility) {
                tot.push(hotel);
            }
        })
        return tot;
    }, [])
}

const searchByRating = (rating, hotels) => {
    if (!rating) return [...hotels]
    return hotels.reduce((tot, hotel) => {
        if (hotel.starRating === rating) {
            tot.push(hotel)
        }
        return tot;
    }, [])
}

module.exports = { searchByName, searchByFacility, searchByRating }