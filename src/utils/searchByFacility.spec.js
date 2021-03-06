const hotelsArray = require("./hotels.json");
const { searchByFacility } = require("./utilFunctions");

describe('Search By Facility', () => {
    it('returns an array of objects', () => {
        const actualValue = searchByFacility('car park', hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true);
        expect(typeof actualValue[0]).toBe("object");
    });
    it('objects in the array contain the correct keys', () => {
        const hotels = searchByFacility("car park", hotelsArray)
        const actualValue = Object.keys(hotels[0])
        const expectedValue = ["name", "starRating", "facilities"];
        expect(actualValue).toEqual(expectedValue)
    });
    it('objects in array should correspond to the facility passed', () => {
        const hotels = searchByFacility("car park", hotelsArray);
        const actualValue = hotels[0].facilities;
        const expectedValue = "car park";
        expect(actualValue.includes(expectedValue)).toBe(true)
    });
    it('does not mutate hotelsArray taken from JSON file', () => {
        const actualValue = searchByFacility("car park", hotelsArray);
        expect(actualValue).not.toBe(hotelsArray)
    });
    it('returns an array of all hotels when nothing is passed', () => {
        const actualValue = searchByFacility("", hotelsArray);
        expect(actualValue).toEqual(hotelsArray)
        expect(Array.isArray(actualValue)).toBe(true)
    });
    it('does not mutate hotelsArray even when no parameters are passed', () => {
        const actualValue = searchByFacility("", hotelsArray);
        expect(actualValue).not.toBe(hotelsArray)
    });
});