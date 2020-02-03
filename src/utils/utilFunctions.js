const searchByName = (name, hotels) => {
    const [hotelsFound] = hotels.filter(hotel => {      // pure function thus, does not mutate input data
        return hotel.name === name
    })
    if (!hotelsFound) return [...hotels]
    return hotelsFound
}

const searchByFacility = () => {

}

const searchByRating = () => {

}

module.exports = { searchByName, searchByFacility, searchByRating }