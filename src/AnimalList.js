import React from 'react';
import Card from './Card';
import FichaAnimal from './FichaAnimal';



class AnimalList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'AnimalList'
    };
  }

  render() {
    return (
      <div className='container'>

        {this.props.animal.map(animal => <Card animal={animal} key={animal.id}  />)}
        
      </div>


    );
  }
}



export default AnimalList;
