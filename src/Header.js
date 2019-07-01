import React from 'react';
import './App.css';
import App from './App';
import Register from './Register';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'Header'
    };
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="top-menu-container">
            <button className="top-menu" onClick={this.props.gotoInicio}>Inicio</button>
            <button className="top-menu" onClick={this.props.gotoRegister}>Registrar</button>
            <button className="top-menu" href="#">Blog</button>
          </div>
        </div>
        <h1>
          <img src="assets/logo.jpg" alt="logo" className="logo" id="logo" />
          Petland!
  </h1>
        <div className="container">
          <div className="row">
            <h2>Un mundo donde seguro encontras tu mejor amigo</h2>
          </div>
        </div>
      </div>
    );
  }
}


export default Header;
