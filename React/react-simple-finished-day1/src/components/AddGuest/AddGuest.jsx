import React from 'react';

require('./AddGuest.css');

const h3Styles = {
    color: 'red'
}

class AddGuest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Change Me!'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      this.props.addGuest(this.state.text);
    }

    handleChange(event) {
      this.setState({
          text: event.target.value
      })
    }

    render() {
        return (
            <div className="add-guest-container">
                <h3 style={h3Styles}>Add a guest</h3>
                <input 
                value={this.state.text}
                onChange={this.handleChange}/>
                <button
                  onClick={this.handleSubmit}>
                  Add Guest
                </button>
            </div>
        )
    }
}

export default AddGuest;