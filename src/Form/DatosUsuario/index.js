import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarEmail,ValidarPassword } from "./validaciones";

//!Esto es definir por function Components
const DatosUsuario = () =>{
  const [email,setEmail] = useState({value: "", valid:"null"})
  const [password,setPassword] = useState({value:"",valid:"null"})
  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        if(password.valid && email.valid){
          console.log("Siguiente fomrulario")
          console.log(email,password)
        }else{
          console.log("Nada")
        }
        
        
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(e) => {
          const email = e.target.value
          const valido = ValidarEmail(email)
          setEmail({value:email,valid:valido})
          }
        }
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        helperText={password.valid === false && "Ingresa una contraseña valida, al menos 8 caracteres"}
        error={password.valid === false}
        value={password.value}
        onChange={(e) => {
          const password = e.target.value
          setPassword({value:password,valid:ValidarPassword(password)})
        }
      }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}
//!Esto es definier por clases
/* 
// class DatosUsuario extends React.Component {
//   constructor(props){
//     super(props);
//       this.state ={
//         email:{
//           value:"",
//           valid: true
//         },
//         password:{
//           value:"",
//           valid: true
//         }
//       }
//     }
//   render() {
//     return (
//       <Box
//         component="form"
//         autocomplete="off"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexDirection: "column",
//         }}
//         onSubmit={(e) => {
//           e.preventDefault()
//         }}
//       >
//         <TextField
//           label="Correo electrónico"
//           variant="outlined"
//           fullWidth
//           margin="dense"
//           type="email"
//           error={false}
//           helperText={false && "Ingresa un correo electrónico válido"}
//           value={this.state.email.value}
//           onChange={(e) => this.setState({email:{value:e.target.value}})}
//         />
//         <TextField
//           label="Contraseña"
//           variant="outlined"
//           fullWidth
//           margin="dense"
//           type="password"
//           value={this.state.password.value}
//           onChange={(e) => this.setState({password:{value:e.target.value}})}
//         />
//         <Button variant="contained" type="submit">
//           Siguiente
//         </Button>
//       </Box>
//     );
//   }
// }
*/
export default DatosUsuario;
