import React, { useEffect, useState } from 'react'; //tengo que importar useefccet y usestate

//vamos a probar con una API


const Contact = () => {

// creo variables, y estado 

const [ user, setUser ] = useState([]); // será igual a un array 

    //uso el hook useefecct que siempre recibe 2 parámetros
    // uso éste hook por código asyncrono, código secundario aaparte 
    useEffect(() => { // uso ésto para hacer petición 

        // pido info a la API
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => setUser(json))
    }, []); 

// aquí retorno un mapeo de los datos que pido a la api con el fecth 
  return ( 
      
      <> 
      {/* sino englobo el contenido en una etiqueta estilo ésta que es ciega a la web, me da error el map */}
      

  { user.map((item) => 

        <div key={ item.id} >
        <h3> {item.name} </h3>
        <p> {item.email} </p>
        </div>
    
    )}
    </>
  );
};

export default Contact;
