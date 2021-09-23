import {Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';


const Routes =({nome, setNome, isLogged, setIsLogged})=>{
  return(
    <Switch>
      <Route exact path ="/">
        <Login
          isLogged= {isLogged}
          setIsLogged={setIsLogged}
          nome={nome}
          setName={setNome}
        />
      </Route>
      <Route exact path ="/home">
        <Home
          isLogged= {isLogged}
          setIsLogged={setIsLogged}
          name={nome}
          setName={setNome}          
        />
      </Route>
    </Switch>

  )
}
export default Routes;
