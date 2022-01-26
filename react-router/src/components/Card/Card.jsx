import React, {useState, useEffect} from 'react';
import PostCard from '../PostCard/PostCard';


// aquí es para dar click en algo y que me llve a esa urle con id de la selección 
// video 2 

export default function Card() {

    const [ cards, setCards ] = useState([]); // será igual a un array 

    //uso el hook useefecct que siempre recibe 2 parámetros
    // uso éste hook por código asyncrono, código secundario aaparte 
    useEffect(() => { // uso ésto para hacer petición 

        // pido info a la API
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setCards(json))
    }, []); 

// aquí retorno un mapeo de los datos que pido a la api con el fecth 
  return ( 
      
      <> 
      {/* sino englobo el contenido en una etiqueta estilo ésta que es ciega a la web, me da error el map */}
      
{/* llamo a su hijo  */}

  { cards.map((pst) => {

        <PostCard pst={pst} key={pst.id} />


  })}
    </>
  );
};
