import React, { Component } from 'react';

class NameFilter extends Component {
    state = { name: "" }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Hotel Name:
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </label>
            </form>
        );
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            name: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { name } = this.state;
        this.props.nameChanged(name);
        this.setState({ name: "" })
    }
}

export default NameFilter;