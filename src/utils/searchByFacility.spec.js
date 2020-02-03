const hotelsArray = require("./hotels.json");
const { searchByFacility } = require("./utilFunctions");

describe('Search By Facility', () => {
    it('returns an array of objects', () => {
        const actualValue = searchByFacility('car park', hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true);
        expect(typeof actualValue[0]).toBe("object");
    });
});