import React, { Component } from 'react';

class Botones extends Component {
    state = {}
    render () {
        console.log("Props Botones ", this.props)
        console.log("State Botones", this.state)
        return (
            <div>
                <button onClick={() => this.props.funcionTurno(-1)}>Disminuye un turno</button>
                <button onClick={() => this.props.funcionTurno(+1)}>Aumenta un turno</button>
            </div>
        );
    }
}

export default Botones;

/*https://github.com/nuclearWinters/equipoReact*/