import React, { useState, useEffect } from "react"

//Componente sin estado

const ComponenteFuncional = props => {
    const [edad, setEdad] = useState(25)
    useEffect(() => {
        setEdad(26)
    }, [])
    return (
        <div>
            <button onClick={() => setEdad(30)}>Cambiar edad</button>
            <div>Armando Narcizo Rueda Pérez, Edad: {edad}</div>
        </div>
    )
}

class ComponenteDeClase extends React.Component {
    state = {
        edad: 25
    }
    componentDidMount () {
        this.setState({edad: 26})
    }
    render () {
        return (
            <div>
                <button onClick={() => this.setState({edad: 30})}>Cambiar edad</button>
                <div>Armando Narcizo Rueda Pérez, Edad: {this.state.edad}</div>
            </div>
        ) 
    }
    
}

export {
    ComponenteFuncional,
    ComponenteDeClase
}