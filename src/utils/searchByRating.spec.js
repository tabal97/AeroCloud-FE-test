const hotelsArray = require("./hotels.json");
const { searchByRating } = require("./utilFunctions");

describe('Search By Rating', () => {
    it('returns an array of objects', () => {
        const actualValue = searchByRating(5, hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true)
        expect(typeof actualValue[0]).toBe("object")
    });
    it('objects in the array contain the correct keys', () => {
        const hotels = searchByRating(3, hotelsArray)
        const actualValue = Object.keys(hotels[0])
        const expectedValue = ["name", "starRating", "facilities"];
        expect(actualValue).toEqual(expectedValue)
    });
});