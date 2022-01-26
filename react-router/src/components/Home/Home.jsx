import React, {useState, useEffect } from 'react';

const Home = () => {

  // creo variables, y estado 

// lo que hgo destructuring es nombres de lo que quiero y el set de lo que quiero
const [ fotos, setFotos ] = useState([]); // será igual a un array 

//uso el hook useefecct que siempre recibe 2 parámetros
// uso éste hook por código asyncrono, código secundario aaparte 
useEffect(() => { // uso ésto para hacer petición 

    // pido info a la API
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((json) => setFotos(json))
}, []); 


// aquí retorno un mapeo de los datos que pido a la api con el fecth 
return ( 
  
  < > 
  {/* sino englobo el contenido en una etiqueta estilo ésta que es ciega a la web, me da error el map */}
  

{ fotos.map((item) => 

    <div key={ item.id} >
    <h3> {item.title} </h3>
    <img src= { item.url } / >
    </div>

)}
</>
);
};

export default Home;
