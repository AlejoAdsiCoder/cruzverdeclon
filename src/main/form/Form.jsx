import { Box, Container, FormControl, Input, InputLabel, MenuItem, Modal, Select } from '@mui/material'
import React from 'react'
import './Form.scss'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tipodocumento: '',
      numdoc: '',
      firstNom: '',
      secondNom: '',
      firstApe: '',
      secondApe: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.tipodocumento + this.state.numdoc);
    event.preventDefault();
  }

  render() {
    return (
      <Container>
      <form onSubmit={this.handleSubmit}>
        <h3>Ingresa tus datos</h3>
        <div>
        <FormControl className='field-select'>
            <InputLabel htmlFor='tipodocumento'>Seleccione</InputLabel>
            <Select id="" name='tipodocumento' value={this.state.tipodocumento} onChange={this.handleChange} label="Seleccione" >
              <MenuItem value="Cedula de ciudadanía">Cedula de ciudadanía</MenuItem>
              <MenuItem value="Cedula de extranjeria">Cedula de extranjeria</MenuItem>
              <MenuItem value="Dni">Dni</MenuItem>
            </Select>
        </FormControl>
        </div>
        <div>
        <FormControl style={{ marginTop: '12px'}} className='field-doc'>
            <InputLabel htmlFor='numdoc'>Numero de documento</InputLabel>
            <Input id="numdoc" name="numdoc" value={this.state.numdoc} onChange={this.handleChange} aria-describedby='my-helper-text' />
        </FormControl>
        </div>
        <div className="formNoms">
          <div>
          <FormControl className='field-doc'>
              <InputLabel htmlFor='firstNom'>Primer Nombre</InputLabel>
              <Input id="firstNom" name="firstNom" value={this.state.firstNom} onChange={this.handleChange} aria-describedby='my-helper-text' />
          </FormControl>
          <FormControl className='field-doc'>
              <InputLabel htmlFor='secondNom'>Segundo Nombre</InputLabel>
              <Input id="secondNom" name="secondNom" value={this.state.secondNom} onChange={this.handleChange} aria-describedby='my-helper-text' />
          </FormControl>
          </div>
          <div>
          <FormControl className='field-doc'>
              <InputLabel htmlFor='firstApe'>Primer Apellido</InputLabel>
              <Input id="firstApe" name="firstApe" value={this.state.firstApe} onChange={this.handleChange} aria-describedby='my-helper-text' />
          </FormControl>
          <FormControl className='field-doc'>
              <InputLabel htmlFor='secondApe'>Segundo Apellido</InputLabel>
              <Input id="secondApe" name="secondApe" value={this.state.secondApe} onChange={this.handleChange} aria-describedby='my-helper-text' />
          </FormControl>
          </div>
        </div>
        <div className="sede">
          <h4>Sede 1</h4>
          <p>Calle 1 # 87 - 78, Lorem Ipsum</p>
          <p>Horario: Lorem Ipsum</p>
        </div>
        <input type="submit" className='formButton' value="Siguiente" />
      </form>

    </Container>

    )
  }
}

export default Form
