import React from 'react'

class Pet extends React.Component {


  render() {
    //console.log(this.props)
    let disabled
    if(this.props.pet.isAdopted == undefined || this.props.pet.isAdopted == false){
      disabled = false
    } else{
      disabled = true
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender == "male" ? '♂' :'♀' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {disabled == true ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

//onClick={this.props.onAdoptPet(this.props.pet.id)}
export default Pet
