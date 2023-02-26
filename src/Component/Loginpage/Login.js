import React,{useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const[UserName, setUserName]= useState('');
    const[Password, setPassword]= useState('');
    const[Error,setError]= useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(UserName.length===0 || Password.length===0)
        {
          setError(true);
        }
        if(UserName && Password)
        {
        const loginObj={
            name:UserName,
            pwd:Password
        }
        if(UserName==="admin" || UserName==="ssp"  && Password==="admin" || Password==="ssp")
        {
          alert("Login Success");
          navigate("/");
        }
        else{
          alert("Enter Valid Username or Password")
        }
      }  
    }
  return (
    <>
    <div id="back" >
      <div id="topic">E-LIBRARY</div>
      <div id="logo"></div>
      <Link to={'/About'}><div id="about">About us</div></Link>
      <Link to={'/Register'}><div id="sign">Register</div></Link>
      <h2 id="caption">Welcome Back!</h2>
      <h3 id="rempass"> Remember me</h3>
      <Link to={'/forget'}><div id="forgot">Forgot password?</div></Link>
      
      <form onSubmit={formHandler} id="form">
      <input id="user" type="text" value={UserName} placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/><br/>
      <div>
      {Error && UserName.length===0 ?<label id="uerror" style={{color:'red'}}>Username is required</label>:""}
      </div>
      <input id="psw" type="password"  value={Password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
      <div>
      {Error && Password.length===0 ?<label id="perror" style={{color:'red'}}>Password is required</label>:""}
      </div>
      <input id='remember' type="checkbox"/>
      <button id="login" type="submit">LOGIN</button>
      <Link to={'/Register'}><button id="signup">SIGNUP</button></Link>
    </form>
    </div>
    </>
  )
}

export default Login