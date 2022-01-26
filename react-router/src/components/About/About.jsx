import React, { useState, useEffect } from 'react';

export default function About() {


// lo que hgo destructuring es nombres de lo que quiero y el set de lo que quiero
  const [ commits, setCommits ] = useState([]); // será igual a un array 

    //uso el hook useefecct que siempre recibe 2 parámetros
    // uso éste hook por código asyncrono, código secundario aaparte 
    useEffect(() => { // uso ésto para hacer petición 

        // pido info a la API
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((json) => setCommits(json))
    }, []); 

// aquí retorno un mapeo de los datos que pido a la api con el fecth 
  return ( 
      
      <> 
      {/* sino englobo el contenido en una etiqueta estilo ésta que es ciega a la web, me da error el map */}
      

  { commits.map((item) => 

        <div key={ item.id} >
        <h3> {item.name} </h3>
        <p> {item.body} </p>
        </div>
    
    )}
    </>
  );
};



