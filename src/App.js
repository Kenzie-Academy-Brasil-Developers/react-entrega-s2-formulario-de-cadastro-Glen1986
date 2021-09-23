import './App.css'
//import {Route, Switch} from 'react-router-dom'
import Routes from './routes'
import {useState} from 'react'

function App() {
  const [isLogged, setIsLogged] = useState();
 const [nome, setNome] = useState("")

  return (
      <div className="App">
        <Routes
          nome={nome}
          setNome = {setNome}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
      </div>
  );
}

export default App;
