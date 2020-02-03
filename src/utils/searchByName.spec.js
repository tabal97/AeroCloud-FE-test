const hotelsArray = require("./hotels.json");
const { searchByName } = require("./utilFunctions");

describe('Search By Name', () => {
    it('should return a single object', () => {
        const actualValue = searchByName('hotelone', hotelsArray)
        expect(typeof actualValue).toBe("object")
    });
    it('should return an object with the correct keys', () => {
        const hotel = searchByName("hotelone", hotelsArray)
        const actualValue = Object.keys(hotel)
        const expectedValue = ["name", "starRating", "facilities"];
        expect(actualValue).toEqual(expectedValue)
    });
    it('should return with an object containing a name key equal to the name parameter passed', () => {
        const hotel = searchByName("hotelone", hotelsArray);
        const actualValue = hotel.name;
        const expectedValue = "hotelone";
        expect(actualValue).toBe(expectedValue)
    });
    it('does not mutate hotelsArray taken from JSON file', () => {
        const actualValue = searchByName("hotelone", hotelsArray);
        expect(actualValue).not.toBe(hotelsArray)
    });
    it('returns an array of all hotels when nothing is passed', () => {
        const actualValue = searchByName("", hotelsArray);
        expect(actualValue).toEqual(hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true)
    });
});