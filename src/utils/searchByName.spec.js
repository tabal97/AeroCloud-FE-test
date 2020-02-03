const hotelsArray = require("./hotels.json");
const { searchByName } = require("./utilFunctions");

describe('Search By Name', () => {
    it('should return a single object', () => {
        const actualValue = searchByName('hotelone', hotelsArray)
        expect(typeof actualValue).toBe("object")
    });
});