import './estilos/App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import imagen1 from './assets/icono1.png';s
import { useState } from 'react';
import {evaluate} from 'mathjs';





function App() {

    const [input, setInput] = useState('');

    const agrefarInput = val =>{
        setInput( input + val);
    };

    const calcularResultado = () =>{
        if(input){
        setInput(evaluate(input));
        } else {
        alert("Por favor ingrese un numero.");
        }
    };

    return (
        <div className="App">
            <div className='logo-contenedor'>
                <img src={imagen1}
                className='logo'
                alt='logo de pagina' />
        </div>
        <div className='contenedor-calculadora'>
            <Pantalla input={input}/>
            <div className='fila'>
                <Boton manejarClic={agrefarInput} >1</Boton>
                <Boton manejarClic={agrefarInput} >2</Boton>
                <Boton manejarClic={agrefarInput} >3</Boton>
                <Boton manejarClic={agrefarInput} >+</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agrefarInput} >4</Boton>
                <Boton manejarClic={agrefarInput} >5</Boton>
                <Boton manejarClic={agrefarInput} >6</Boton>
                <Boton manejarClic={agrefarInput} >-</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={agrefarInput} >7</Boton>
                <Boton manejarClic={agrefarInput} >8</Boton>
                <Boton manejarClic={agrefarInput} >9</Boton>
                <Boton manejarClic={agrefarInput} >*</Boton>
            </div>
            <div className='fila'>
                <Boton manejarClic={calcularResultado}>=</Boton>
                <Boton manejarClic={agrefarInput} >0</Boton>
                <Boton manejarClic={agrefarInput} >.</Boton>
                <Boton manejarClic={agrefarInput} >/</Boton>
            </div>
            <div className='fila'>
                <BotonClear manejarClear={() => setInput('')}>
                Borrar
                </BotonClear>
            </div>
        </div>
        </div>
    );
}  
export default App;