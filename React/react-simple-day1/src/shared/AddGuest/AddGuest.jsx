import React from 'react';

class AddGuest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      text: 'change me'
  }
  handleSubmit(event){
    console.log(event);
  }
  handleChange(event){
    event.target.value;
  }

  render(){
    return (
      <div>
      <input
        value={this.state.text}
        onChange={this.handleChange} />
      <button
        onClick={this.handleSubmit}>
        Add Guest
      </button>
      </div>
    );
  }
}
export default AddGuest;
