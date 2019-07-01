import React from 'react';
import './App.css';
import Filters from './Filters';
import Register from './Register';
import Header from './Header';
import AnimalList from './AnimalList';
import Card from './Card';
import FichaAnimal from './FichaAnimal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'Inicio',
      animal: [{
        id: 1,
        name: 'Garfield',
        description: 'Adulto. Tamaño pequeño.',
        image: 'assets/gato1.jpg',
        tipo: 'Gato',
        barrio: 'Solymar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '01/02/2017',
        colorpeloyojos: 'Beige/negro y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'

      },
      {
        id: 2,
        name: 'Neko',
        description: 'Adulto. Tamaño mediano.',
        image: 'assets/gato2.jpg',
        tipo: 'Gato',
        barrio: 'El Pinar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '21/09/2015',
        colorpeloyojos: 'Blanco/beige y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'
      },
      {
        id: 3,
        name: 'Estrella',
        description: 'Cachorro. Tamaño mediano.',
        image: 'assets/gato3.jpg',
        tipo: 'Gato',
        barrio: 'Solymar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '01/02/2017',
        colorpeloyojos: 'Beige/negro y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'
      },
      {
        id: 4,
        name: 'Firulais',
        description: 'Cachorro. Tamaño pequeño.',
        image: 'assets/perro1.jpg',
        tipo: 'Gato',
        barrio: 'Solymar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '01/02/2017',
        colorpeloyojos: 'Beige/negro y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'
      },
      {
        id: 5,
        name: 'Rex',
        description: 'Adulto. Tamaño grande.',
        image: 'assets/perro2.jpg',
        tipo: 'Gato',
        barrio: 'Solymar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '01/02/2017',
        colorpeloyojos: 'Beige/negro y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'
      },
      {
        id: 6,
        name: 'Tobi',
        description: 'Cachorro. Tamaño pequeño.',
        image: 'assets/perro4.jpg',
        tipo: 'Gato',
        barrio: 'Solymar',
        raza: 'Mestizo',
        sexo: 'Macho',
        fechadenacimiento: '01/02/2017',
        colorpeloyojos: 'Beige/negro y ojos verdes',
        description2: 'Gato muy tranquilo y sociable. Muy bueno con los niños.'
      }]

    };
  }


  gotoInicio = () => {
    this.setState({
      currentSection: 'Inicio'
    });
  }

  gotoRegister = () => {
    this.setState({
      currentSection: 'Register'
    });
  }

  gotoFichaAnimal = () => {
    this.setState({
      currentSection: 'FichaAnimal',
    
    });
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'Register':
        return (
          <Register
          />
        );
        case 'FichaAnimal':
        return (<FichaAnimal animal={this.state.animal}
         />
        );
      case 'Inicio':
      default:
        return (<AnimalList animal={this.state.animal} 
          
          />
        );
      
    }
    
  }


  render() {
    return (
      <div className='container'>
        <Header gotoInicio={this.gotoInicio} gotoRegister={this.gotoRegister} />
        <Filters />
        <main>

          {this.renderCurrentSection()}

        </main>





      </div>
    );



  }



}





export default App;
