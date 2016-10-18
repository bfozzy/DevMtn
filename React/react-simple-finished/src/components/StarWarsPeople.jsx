import React from "react";

import {getPeople} from "../../services/starWarsService.js"

getPeople().then(people => console.log(people));
class StarWarsPeople extends React.Component {
  constructor(props){
    super()
  }
  componentDidMount(){
    getPeople().then(people=> {
      this.setState({
        people: people
      })
    })
  }
  render(){
    const people = this.state.people.map(person=> {
      return (
        <p>{person.name}</p>
      )
    })
    return (
      <h1>Star Wars People!</h1>
      <p>{people}</p>
    )
  }
}
