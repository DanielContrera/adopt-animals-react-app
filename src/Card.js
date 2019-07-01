import React from 'react';
import AnimalList from './AnimalList';
import './App.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'Card',

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

        <div className="row">
          <div className="card col-6 col-md-4" >
            <img className="card-img-top" src={this.props.animal.image} />
            <div className="card-body">
              <h5 className="card-title">{this.props.animal.name}</h5>
              <p className="card-text">{this.props.animal.description}</p>
              <button className="btn btn-primary"  >Más info!</button>
            </div>
          </div>

        </div>





      </div>
    );
  }
}



export default Card;
