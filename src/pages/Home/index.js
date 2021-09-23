import HomePage from '../../components/homePage'
const Home =({ nome, setNome, isLogged, setIsLogged})=>{
  return(
    <>
      <div>
        <HomePage
          isLogged={isLogged}
          setIsLogged={setIsLogged}
          nome={nome}
          setName={setNome}
        />
      </div>
    </>
  );
};
export default Home;
