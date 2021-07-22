import React,{useState} from 'react';
import { Avatar, Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Login from './Login';
import  Alert  from '@material-ui/lab/Alert';

const Signup =()=>{
 
  //form validation
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [phone,setPhone]=useState('');

  const [flag,setFlag]=useState(false);
  const [login,setLogin]=useState(true);
  

  function handleFormSubmit(e){
    e.preventDefault();
    if(!name||!email||!password||!phone){
      setFlag(true)
    } else{
      setFlag(false);
      localStorage.setItem('FormSubmissionEmail',JSON.stringify(email));
      localStorage.setItem('FormSubmissionPassword',JSON.stringify(password))
      setLogin(!login);
  }
  }
  return (
  <>
   
    {login?<Grid>
      
      <Paper elevation={20}  className='signupPaper'>
      
        <Grid align='center'>
          <Avatar style={{backgroundColor:'green'}}>
            <GroupAddIcon/>
          </Avatar>
          <h2>Sign Up</h2>
          <Typography variant='caption'><b>Please fill the form to create an account</b></Typography>
        </Grid>
        <form  className='signupForm' onSubmit={handleFormSubmit}>
          <TextField fullWidth label='Name' onChange={e=>setName(e.target.value)}/>
          <TextField fullWidth label='Email' type='email'  onChange={e=>setEmail(e.target.value)}/>  
          <TextField fullWidth label='Phone no' type='phone'  onChange={e=>setPhone(e.target.value)}/>
          <TextField fullWidth label='Password' type='password'  onChange={e=>setPassword(e.target.value)}/>
          <Button type='submit' variant='contained'color='primary'style={{marginTop:'20px'}}>Sign up</Button>
          <Typography style={{marginTop:'10px'}}> Have an account? 
          <Link href='#' onClick={e=>setLogin(!login)}>Sign in</Link>
        </Typography>
        {/* error  */}
        {flag&&<Alert severity="error" style={{marginTop:'20px'}} >
            Fill all the required fields correctly
        </Alert>}
        </form>
      </Paper>
    </Grid>:<Login/>}
   </>
  )
}

export default Signup;