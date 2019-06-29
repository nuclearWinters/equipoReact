import React, { Component } from 'react';
import './App.css';
import Botones from "./componentes/botones"
import { ComponenteFuncional, ComponenteDeClase } from "./componentes/mostrarNombre"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombres: [],
      turno: 0,
      edad: 25
    }
    this.cambiarTurno = this.cambiarTurno.bind(this)
  }

  cambiarTurno = (numero) => {
    this.setState({turno: this.state.turno + numero})
  }

  //shouldComponentUpdate(nextProps, nextState) {
  //  console.log("should next? ", nextState)
  //  console.log("should this? ", this.state)
  //  return this.state.nombres !== nextState.nombres || this.state.turno !== nextState.turno
  //}

  componentDidMount () {
    console.log("Activado solo una vez")
    fetch('http://192.168.1.66:3001/ejemplo')
    .then((data) => data.json())
    .then((json) => this.setState({nombres: json}))
  }

  render () {
    //console.log("Props App ", this.props)
    //console.log("State App", this.state)
    console.log("Se volvio a renderizar ", this.state.nombres)
    return (
      <div style={{alignItems: "center", display: "flex", flexDirection: "column" }}>
        <div>{this.state.turno}</div>
        <Botones nombre="Armando" funcionTurno = {this.cambiarTurno.bind(this)} />
        {this.state.nombres.map((nom, i) => 
          <div key={i}>
            <div>{nom.nombre}</div>
            <div>hola!</div>
          </div>
        )}
        <ComponenteFuncional />
        <ComponenteDeClase />
      </div>
    );
  }
}

export default App;

/*https://github.com/nuclearWinters/equipoReact*/