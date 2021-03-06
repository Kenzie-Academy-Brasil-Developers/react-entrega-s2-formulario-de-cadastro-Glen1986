import { useForm } from 'react-hook-form';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver }from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
//import axios from 'axios';
import './styles.css'

const FormLogin =({nome, setNome})=>{

 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confPassword, setConfPassword] = useState("");
 const [isLogged, setIsLogged] = useState()

  const history = useHistory()

  const schema = yup.object().shape({
    name:yup.string().required("campo obrigatório"),
    email:yup.string().email("email no valido").required("campo obrigatorio"),
    password:yup.string().required("senha obrigatoria").matches("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$","sua senha tem que incluir uma letra mayuscula, uma letra minuscula, um numero, e um caracter especial"),
    confPassword:yup.string().required("confimacao obrigatoria").oneOf([yup.ref("password")], "sua confirmacao nao coincide com suasenha ja cadastrada"),
   })

  const { 
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleForm =(data)=>{
    setNome(
    [nome, data.name]
    )
    setEmail(
    [email, data.email]
    )
    setPassword(
    [password, data.password]
    )
    setConfPassword(
    [confPassword, data.confPassword]
    )
  }
 
  const handleLogin =()=>{
    setIsLogged(true)
    handleForm()
  }
     if(isLogged === true){
    history.push("/home");
  }
    return(

      <form onSubmit={handleSubmit(handleLogin)}>
        <h2>KenzieCrew</h2>
        <div>
          <TextField
            lebel="Nome"
            placeholder="Nome"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            lebel="Email"
            placeholder="Email"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            lebel="senha"
            placeholder="Senha"
            type="password"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            lebel="confirmar Senha"
            placeholder="confirme sua senha"
            type="password"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("confPassword")}
            error={!!errors.confPassword}
            helperText={errors.confPassword?.message}
          />
          </div>
          <div>
          <Button  type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </div>
      </form>
  )
}


export default FormLogin
