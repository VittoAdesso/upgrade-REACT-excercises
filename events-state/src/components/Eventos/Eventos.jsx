import React from 'react'

const Eventos = () => {

//creo una función 

const hello = () => {
    // document.write('Hola'); 
    console.log('Holaaaa'); 
}


    return (
        <div>
            <h1>Eventos</h1>
            <button onClick={hello}>Imprime en CONSOLA</button>
        </div>
    )
}

export default Eventos
