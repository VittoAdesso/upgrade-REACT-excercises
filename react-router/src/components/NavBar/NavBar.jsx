import React from 'react';
import { Link } from 'react-router-dom'; 
// puedo llamar con rfc o rafce cómo quiera, funcionan igual 
export default function NavBar() {


      //puedo crear los estilos a lo bruto
  const styles = {
    backgroundColor: "gray",
    color: "black",
    display : "flex", 
    justifyContent : "flex-end",
    
  }

  return (

        <nav style = { styles }>
       {/* ahora llamo Link así los monto siempre , ´çesto sustituye los href, ancher text, etc  */}

        <Link to="/">Home</Link> 
        {/* en to pongo la ruta  */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        {/* BRUTAL!!! */}
        </nav>

  );
}
