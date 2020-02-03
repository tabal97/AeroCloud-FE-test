import React, { Component } from 'react';

class RatingFilter extends Component {
    state = { rating: 0 }
    render() {
        return (<form><h4>Rating:</h4>
            <label><input type="radio" name="rating" value={1} onChange={this.handleChange} />1 Star</label><br />
            <label><input type="radio" name="rating" value={2} onChange={this.handleChange} />2 Stars</label><br />
            <label><input type="radio" name="rating" value={3} onChange={this.handleChange} />3 Stars</label><br />
            <label><input type="radio" name="rating" value={4} onChange={this.handleChange} />4 Stars</label><br />
            <label><input type="radio" name="rating" value={5} onChange={this.handleChange} />5 Stars</label>
        </form>)
    }
    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            rating: value
        })
        const rating = Number(value)
        this.props.ratingChanged(rating);
    }
}

export default RatingFilter;