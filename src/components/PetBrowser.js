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
          pet={ele} //This loads all the attributes for a pet, gender, type, name, adoption 
          key={ele.id} //Key = id
          onAdoptPet={this.props.onAdoptPet} //Callback function for adoption
          />)}
      </div>
    )
  }
}
//adoption={this.props.onAdoptPet}


//PetBrowser.defaultProps = { pets: []};

export default PetBrowser
