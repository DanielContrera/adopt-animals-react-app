import React from 'react';
import AnimalList from './AnimalList';
import './App.css';
class FichaAnimal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'FichaAnimal',

    };

  }
  clearProductList = () => {
    this.setState({
      products: []
    });
  }





  render() {
    return (
      <div>
      
      <div className="container">
          <div className="row">
            <div className="card" >
              <h1>{this.props.animal.name}</h1>
              <img src={this.props.animal.image} className="card-img-top" />
                <dl className="description">
                <dt className="title-description">Tipo:</dt>
                <dd className="info-description">{this.props.animal.tipo}</dd>
                <br />
                <dt className="title-description">Barrio:</dt>
                <dd className="info-description">{this.props.animal.barrio}</dd>
                <br />
                <dt className="title-description">Raza:</dt>
                <dd className="info-description">{this.props.animal.raza}</dd>
                <br />
                <dt className="title-description">Sexo:</dt>
                <dd className="info-description">{this.props.animal.sexo}</dd>
                <br />
                <dt className="title-description">Fecha de nacimiento:</dt>
                <dd className="info-description">{this.props.animal.fechadenacimiento}</dd>
                <br />
                <dt className="title-description">Color de pelo y ojos:</dt>
                <dd className="info-description">{this.props.animal.colorpeloyojos}</dd>
                <br />
                <dt className="title-description">Descripción:</dt>
                <dd className="info-description">{this.props.animal.description2}</dd>
                <br />

              </dl>
              <a href="#" className="btn btn-primary">Adoptar!</a>
            </div>
          </div>
        </div>
      </div>










    );
  }
}



export default FichaAnimal;
