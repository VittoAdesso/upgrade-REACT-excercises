import React, {useState} from 'react'

const Estados = () => {

    const [contador, setContador] = useState(0); 
    // const contadorIncial = 0; 
    return (
        <div>

        {/* hago una especie de calculadora que suma y resta... con función onclick en cada botón  */}
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador +1)}>Suma</button>
            <button onClick={() => setContador(contador -1)}>Resta</button>
            <button onClick={() => setContador(0)}>Reset</button>
        </div>
    )
}

export default Estados
