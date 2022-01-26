import React from 'react';
import { Link } from 'react-router-dom'; 
// puedo llamar con rfc o rafce cómo quiera, funcionan igual 
export default function NavBar() {


      //puedo crear los estilos a lo bruto
  const styles = {
    backgroundColor: "#f5d6ff",
    color: "white",
    display : "flex", 
    justifyContent : "space-between",
    alignItems : "center"
    
  }

  return (

        <nav style = { styles }>
       {/* ahora llamo Link así los monto siempre , ´çesto sustituye los href, ancher text, etc  */}

        <Link to="/">Home</Link> 
        {/* en to pongo la ruta  */}
        <Link to="contact">Contact</Link>
        {/* ponerlo sin / las rutas completas  */}
        <Link to="about">About</Link>
        {/* BRUTAL!!! */}
        </nav>

  );
}
