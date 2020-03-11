import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import '../fetch-setup.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }


  handleTypeChange = (e) => {
    //console.log(this.state)
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    let filterType = this.state.filters.type

    if(filterType === "all"){
      fetch(`/api/pets`)
      .then(res => res.json())
      .then(petsData => this.setState({pets: petsData}))
    } else{
      fetch(`/api/pets?type=${filterType}`)
      .then(res => res.json())
      .then(petsData => this.setState({pets: petsData}))
    }
  }

  handlePetAdoption = (petID) => {
    let adopt = this.state.pets.map(p => {
      return p.id === petID && { ...p, isAdopted: true }
    })
    this.setState({pets: adopt})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handlePetAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
