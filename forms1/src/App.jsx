import React, { useState } from 'react';
import './App.css';
import Forms from './Form/Forms';
import List from './ListCharacter/List';



const App = () => { 

//creo una nueva variable para que se me guarden los datos del form 
//siempre que use usestate debo crearlo arriba y react tb sino está .... OK==??????
  const [ characterList , setCharacterList] = useState([]) ; 
  //DEBES ENTENDER DE ARRIBA, que el useState (aquí dentro, van números, arrays, objetos, lo que quiero que guarde o tome ) 
  console.log("Lista:", characterList);  //para ver los que tengoi guardados

  // creo función que me agregue nuevos perosonajes en array
    const addCharacter = (character) => {
        const newCharacters = [ ...characterList, character ];
        setCharacterList(newCharacters);
      }; 
        return (
          <div className="App">
            <h1>Formularios</h1>
            <Forms addCharacter={addCharacter}/>  {/* la función cae en hijoo */}
            <List characterList={characterList}/> 
          </div> // le llamo al hijo que es el listado de personajes que creo
        );
    
}; 

export default App;
