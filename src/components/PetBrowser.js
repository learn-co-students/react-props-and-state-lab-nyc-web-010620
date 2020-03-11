import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    //console.log(this.props) // petList missing.
    //console.log(this.props.petList)
    //console.log(this.props)
    //console.log(this.props.handlePetAdoption)
    return (
      <div className="ui cards">
      {this.props.pets.map((ele, idx) => 
        <Pet       
          pet={ele}
          key={ele.id} 
          onAdoptPet={this.props.onAdoptPet}
          />)}
      </div>
    )
  }
}
//adoption={this.props.onAdoptPet}


//PetBrowser.defaultProps = { pets: []};

export default PetBrowser
