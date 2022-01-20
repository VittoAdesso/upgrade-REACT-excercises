import React, { useEffect, useState}from 'react'

const UseEffectApi = () => {

    let [character, setCharacter] = useState([]);

    let [ setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);//mostramos loading
        fetch('https://rickandmortyapi.com/api/character')
          .then((response) => response.json())
          .then((data) => setCharacter(data.results))
          .finally(() => setIsLoading(false));//ocultamos el loading
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
              
      <div>
           <h2>UseEffectApi</h2>

        <fieldset>
        { character.map((character) => {

            return (

                <div key={ character.id }>
                <p>{ character.name }</p> 
                </div>
            );
        })
        }; 

     </fieldset>
     </div>
    
    
    );
    
}; 

export default UseEffectApi
