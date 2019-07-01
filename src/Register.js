import React from 'react';
import './App.css';
import CardForm from './Filters'
import AnimalList from './AnimalList'
import Filters from './Filters';
import Header from './Header';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection:'Register'
    };
  }
  render() {
    return (
      <div>  
       
        <div class="container">
          <form>
            <h3>Registrar:</h3>
            <div class="form-group row">
              <label for="seleccionemascota" class="col-sm-2 col-form-label">Seleccione mascota:</label>
              <div class="col-sm-10">
                <select class="form-control" id="seleccionemascota">
                  <option>Perro</option>
                  <option>Gato</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
              <div class="col-sm-10">
                <input type="nombre" class="form-control" id="nombre" placeholder="Nombre" />
              </div>
            </div>
            <div class="form-group row">
              <label for="seleccionemascota" class="col-sm-2 col-form-label">Sexo:</label>
              <div class="col-sm-10">
                <select class="form-control" id="seleccionemascota">
                  <option>Macho</option>
                  <option>Hembra</option>                  
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="raza" class="col-sm-2 col-form-label">Raza:</label>
              <div class="col-sm-10">
                <input type="raza" class="form-control" id="raza" placeholder="Raza" />
              </div>
            </div>
            <div class="form-group row">
              <label for="seleccionebarrio" class="col-sm-2 col-form-label">Seleccione barrio:</label>
              <div class="col-sm-10">
                <select class="form-control" id="seleccionebarrio">
                  <option>Solymar</option>
                  <option>El Pinar</option>
                  <option>San Jose de Carrasco</option>
                  <option>Neptunia</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label for="fechadenacimiento">Fecha de nacimiento:</label>
              <div class="col-sm-10">
                <input type="date" id="fechadenacimiento" placeholder="Fecha de nacimiento de tu mascota" required />
              </div>
            </div>
            <div class="form-group row">
              <label for="colorpeloyojos">Color de pelo y ojos:</label>
              <div>
                <input type="colorpeloyojos" class="form-control" id="colorpeloyojos" placeholder="Color de pelo y ojos" />
              </div>
            </div>
            <div>
              <label for="descripcion">Descripción:</label>
              <textarea name="descripcion" id="descripcion" placeholder="Descripción"></textarea>
            </div>
          </form>
        </div>
        <div class="container">
          <form>
            <h3>Contacto:</h3>
            <div class="form-group row">
              <label for="nombre" class="col-sm-2 col-form-label">Nombre:</label>
              <div class="col-sm-10">
                <input type="nombre" class="form-control" id="nombre" placeholder="Nombre" />
              </div>
            </div>
            <div class="form-group row">
              <label for="telefono" class="col-sm-2 col-form-label">Telefono:</label>
              <div class="col-sm-10">
                <input type="telefono" class="form-control" id="telefono" placeholder="Telefono" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
          </form>
        </div>






        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="botonregistrar">Registrar!</button>
          </div>
        </div>
      </div>
    );
  }
}




export default Register;
