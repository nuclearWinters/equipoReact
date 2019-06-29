import React, { Component } from 'react';

class Botones extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <button onClick={() => console.log("Hola!")}>Disminuye un turno</button>
                <button onClick={() => console.log("Hola!")}>Aumenta un turno</button>
            </div>
        );
    }
}

export default Botones;

/*https://github.com/nuclearWinters/equipoReact*/