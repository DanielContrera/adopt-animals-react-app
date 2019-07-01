import React from 'react';

class Filters extends React.Component {
  
  
  render() {
    return (
      <div className='container'>
         <form>
        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="categoria">Categoría</label>
            <select class="custom-select mr-sm-2" required id="categoria">
              <option selected>Categoría</option>
              <option value="1">Perros</option>
              <option value="2">Gatos</option>
              <option value="3">Otros</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="sexo">Sexo</label>
            <select class="custom-select mr-sm-2" required id="sexo">
              <option selected>Sexo</option>
              <option value="1">Hembra</option>
              <option value="2">Macho</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="edad">Edad</label>
            <select class="custom-select mr-sm-2" required id="edad">
              <option selected>Edad</option>
              <option value="1">0 a 12 meses</option>
              <option value="2">1 a 2 años</option>
              <option value="3">más de 2 años</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="barrio">Barrio</label>
            <select class="custom-select mr-sm-2" required id="barrio">
              <option selected>Barrio</option>
              <option value="1">Solymar</option>
              <option value="2">El Pinar</option>
              <option value="3">San Jose de Carrasco</option>
              <option value="2">Neptunia</option>
            </select>
          </div>
          <div class="col-auto my-1">
            <button type="buscar" class="btn btn-primary">Buscar</button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}



export default Filters;
