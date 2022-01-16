import React, {useState} from 'react' // recuerda siempre llamar al state 
//importo su hoja de estilos
import "./Form.css"

// creo un estado inciial del formulario, por convencións se pone todo en MAYÚSCULAS 
const INITIAL_STATE = {
    name : "" , 
    surname : "", 
    location : "", 
    image : "", 
}; 


const Forms = ({addCharacter}) => { //recojo la función que le creé en app / llamo a la función 

        //DEFINO EL ESTADO DEL FORMULARIO CREANDO CONSTANTE DE LO QUE CREO Y LO SETEO
        const [character, setCharacter] = useState(INITIAL_STATE); 
        // console.log("Personaje creado:", character); 

        // creo personajes de la siguiente manera 
        const handleInput = (ev) => {
        const {name, value} = ev.target; // target es cada uno de los inputs del form
        // función set, + spring operator el ... 
        setCharacter({...character, [name]: value});
        // toma el valor del personaje que saca del input, y o copia en la estructura inicial
        };
                //hago ésto de abajo, para que no me muestre el renderizado del formulario, sino que lo agregue y ya 
                const submitForm = (ev) => {
                    ev.preventDefault();
                    addCharacter(character) // meto aquí la función que cada vez le de click me guarde 
                };

        return (

            //creo un estilño de formulario con inputs
            // le digo que me lo envíe 
            <form className='character-form' onSubmit={submitForm}> 
                {/* //les agrego los name, para que me los lea con el evento target y su spreed operator me ayude a insertar datos en cada uno. recuerda que es un array vacío */}

                {/* Recuerda que luego, debes agregarle la función de arriba, handleinput en cada uno que me leerá cada input el cambio */}
                    <input type="text" placeholder='Name' name="name" onChange={handleInput}></input>
                    <input type="text" placeholder='SurName' name="surname" onChange={handleInput}></input>
                    <input type="text" placeholder='Location' name="location" onChange={handleInput}></input>
                    {/* <input type="text" placeholder='Image' name="image" onChange={handleInput}></input> */}
                    {/* //recuerda que le debes decir que es tupi submit.... para que me lo envíe  */}
                    <button type="submit">Save Character</button>
            </form>
        )
}

export default Forms
