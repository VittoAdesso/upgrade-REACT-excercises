import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

//importo ésto que lo saco de la doc de react (1)
import {
  BrowserRouter as Router, // le digo que se llamará de otra manera == router mejor (yo decido) (2)
  Routes, // uso para englobar los componentes con rutas específicas   (3)
  Route // que ésto se usa pàra cada uno de los  (4componenentes, tendrá un path y el componnente mira abajo
} from "react-router-dom"; //ojo con ésto, que es lo que importo a nav bar, que es de donde me saldrán las rutas 

function App() {


  return (
    // le quito el div, y le llamo Router que es la primera importación de arriba  (5)
    <Router> 
      <NavBar/>
        <Routes>
          <Route path="/" element= { <Home/>} />
          {/* ponerlos sin los / las rutas  */}
          <Route path="about" element= {  <About /> }/>
          <Route path="contact" element= {  <Contact/> }/>
        </Routes>
    </Router>
  );
}

// ahora me voy a navbar para importar las rutas o links  (6)
export default App;
