import FormLogin from '../../components/FormLogin'
const Login = ({nome, setNome}) =>{
  return(
  <>
    <FormLogin 
      name={nome}
      setName={setNome}
    />
  </>
  );
};
export default Login;
