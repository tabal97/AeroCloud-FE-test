const searchByName = (name, hotels) => {
    if (name) {
        const [hotelsFound] = hotels.filter(hotel => {      // pure function thus, does not mutate input data
            return hotel.name === name
        })
        if (!hotelsFound) return { msg: "hotel not found" }
        return hotelsFound
    } else return [...hotels]
}

const searchByFacility = (name, hotels) => {
    return hotels
}

const searchByRating = () => {

}

module.exports = { searchByName, searchByFacility, searchByRating }