
import './App.css';
import Hello from './components/Hello'; 
import { Bye } from './components/Bye';
// puedo hacelo a lo antiguo o con el const tb y arrow 
// function App() {

const App = () => {

const name = 'Vitto'; 
const day = '16.1.2022'; 

  return (
    <div className="App">
    My app 
    <Hello name={name}/>
    <Bye name={name} day={day}/>
    </div>
  );
}

export default App;
