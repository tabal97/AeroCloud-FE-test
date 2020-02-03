const hotelsArray = require("./hotels.json");
const { searchByRating } = require("./utilFunctions");

describe('Search By Rating', () => {
    it('returns an array of objects', () => {
        const actualValue = searchByRating(5, hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true)
        expect(typeof actualValue[0]).toBe("object")
    });
});