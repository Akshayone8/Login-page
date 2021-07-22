import React,{useState} from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import Signup from './Signup';
import Alert from '@material-ui/lab/Alert';
import Home from './Home';

const Login =()=>{
  
  // form validation 
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);
  const [login,setLogin]=useState(true)
  
  function handleLogin(e){
    e.preventDefault();
    let mail=localStorage.getItem('FormSubmissionEmail').replace(/"/g,"");
    let pass=localStorage.getItem('FormSubmissionPassword').replace(/"/g,"");
 
    if(!emaillog||!passwordlog){
      setFlag(true)
    }else if((passwordlog!==pass)||(emaillog!==mail)){
      setFlag(true);
    }else{
      setHome(!home);
      setFlag(false);
    }

    
  }
  return (
    <>
    {login?home?<Grid >
      <Paper elevation={10}  className='paperStyle'>
        <Grid align='center'>
            <Avatar style={{backgroundColor:'green'}}><PersonSharpIcon/></Avatar>
            <h1>Sign in</h1>
        </Grid>
       
        <form onSubmit={handleLogin}  className='gridStyle'>
          <TextField label='Email' placeholder='Enter your email' fullWidth required onChange={e=>setEmaillog(e.target.value)}/>
          <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required onChange={e=>setPasswordlog(e.target.value)}/>
          <Button type='submit' color='primary' variant='contained' fullWidth style={{marginTop:'10px'}}>Sign in</Button>
          <Typography style={{marginTop:'10px'}}> Don't you have an account? 
            <Link href='#' onClick={e=>setLogin(false)}>Sign Up</Link>
          </Typography>
          {/* error  */}
          {flag&&<Alert severity="error"  style={{marginTop:'10px'}}>
          Fill correct Info else keep trying.
        </Alert>}
        </form>
      
      </Paper>
    </Grid>:<Home/>:<Signup/>}
    
  </>
  )
}

export default Login;
