import React, { Component } from 'react';

class RatingFilter extends Component {
    state = { rating: 0 }
    render() {
        return (<form><h4>Rating:</h4>
            <label><input type="radio" name="rating" value={1} />1 Star</label><br />
            <label><input type="radio" name="rating" value={2} />2 Stars</label><br />
            <label><input type="radio" name="rating" value={3} />3 Stars</label><br />
            <label><input type="radio" name="rating" value={4} />4 Stars</label><br />
            <label><input type="radio" name="rating" value={5} />5 Stars</label>
        </form>)
    }
}

export default RatingFilter;