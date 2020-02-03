import React, { Component } from 'react';

class NameFilter extends Component {
    state = { name: "" }
    render() {
        return (
            <form>
                <label>
                    Hotel Name:
    <input type="text" name="name" value={this.state.name} />
                    <input type="submit" value="Search" />
                </label>
            </form>
        );
    }
}

export default NameFilter;