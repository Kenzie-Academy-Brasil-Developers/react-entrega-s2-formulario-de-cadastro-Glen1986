import FormLogin from '../../components/FormLogin'
const Login = ({nome, setNome, isLogged, setIsLogged}) =>{
  return(
  <>
    <FormLogin 
      nome={nome}
      setNome={setNome}
      isLogged={isLogged}
      setIsLogged={setIsLogged}
    />
  </>
  );
};
export default Login;
