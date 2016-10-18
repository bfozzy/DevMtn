import React from 'react';
import GuestComponent from '../GuestComponent/GuestComponent.jsx'
import AddGuest from '../AddGuest/AddGuest.jsx';

class PartyList extends
  React.Component{
    constructor(props){
      super(props);
      this.state = {
        theme: 'Toga',
        guests: [
          {
            key: 1,
            name: 'Gus'
          },
          {
            key: 2,
            name: 'Blake Lively'
          },
          {
            key: 3,
            name: 'Julius Caesar'
          },
          {
            key: 4,
            name: 'other women'
          }

        ]
      }
    }

    handleAddGuest(guest){
      const newGuests = this.state.guest.push({
        key: this.state.guests.length+1,
        name: guest
      })
      console.log(newGuests);
    }

    render(){
      const guestList = this.state.guests.map(function(guest){
        return <GuestComponent
          key={guest.key}
          guest={guest.name}/>
      })
      return ( //you have to return one root element. So if you have multiple divs in your return, you need to wrap them all in a parent div in order for it to render correctly

        <div>
          <h3>This is gunna be a great {this.state.theme} party!</h3>
          <h5>Guest List:</h5>
          {guestList}
          <AddGuest
            addGuest={this.handleAhandleAddGuest} />
        </div>
      )
    }
  }


  export default PartyList;
