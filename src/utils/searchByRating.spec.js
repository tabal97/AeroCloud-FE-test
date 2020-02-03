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
    it('objects in array should correspond to the rating requested', () => {
        const hotels = searchByRating(3, hotelsArray);
        const actualValue = hotels[0].starRating;
        const expectedValue = 3;
        expect(actualValue).toBe(expectedValue)
    });
    it('does not mutate hotelsArray taken from JSON file', () => {
        const actualValue = searchByRating(3, hotelsArray);
        expect(actualValue).not.toBe(hotelsArray)
    });
    it('returns an array of all hotels when nothing is passed', () => {
        const actualValue = searchByRating("", hotelsArray);
        expect(actualValue).toEqual(hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true)
    });
});