import Button from '@mui/material/Button';
import { Box, ThemeProvider } from '@mui/system';
//import Link from 'react-hook-form';
import { useHistory } from 'react-router-dom'



const HomePage =({ nome, setNome,isLogged, setIsLogged})=>{
  const history = useHistory();
  return(

  <>
    <div>Home</div>
     <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#00cc44',
            dark: '#00802b',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          bgcolor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </ThemeProvider>
    <div>{nome}</div>
    <Button variant="contained"
      onClick = {history.push("/")}
    >Login</Button>
  </>
  )
}
export default HomePage;
