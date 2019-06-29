import React, { Component } from 'react';
import './App.css';
import Botones from "./componentes/botones"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      turno: 0
    }
    this.cambiarTurno = this.cambiarTurno.bind(this)
  }

  cambiarTurno = (numero) => {
    this.setState({turno: this.state.turno + numero})
  }

  render () {
    return (
      <div style={{alignItems: "center", display: "flex", flexDirection: "column" }}>
        <div>{this.state.turno}</div>
        <Botones nombre = "Armando" />
      </div>
    );
  }
}

export default App;

/*https://github.com/nuclearWinters/equipoReact*/