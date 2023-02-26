import React,{useState} from 'react'
import './Forgot.css'
import { Link, useNavigate } from 'react-router-dom';
function Forgot() {

    const[Email1, setEmail1]= useState('');
    const[Newpassword, setNewpassword]= useState('');
    const[otp, setotp]= useState('');
    const[Error,setError]= useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(Email1.length==0 || Newpassword.length==0 || otp.length==0)
        {
          setError(true);
        }
        if(Email1 && Newpassword && otp)
        {
        const loginObj={
            emil:Email1,
            pswd:Newpassword,
            otp1:otp
        }
        navigate("/");
      }
    }
  return (
    <>
    <div id="back1" >
      <div id="topic1">E-LIBRARY</div>
      <div id="logo1"></div>
      <Link to={'/About'}><div id="about1">About us</div></Link>
      <Link to={'/Register'}><div id="sign1">Register</div></Link>
      <h2 id="caption1">ACCOUNT RECOVERY</h2>
      <h3 id="rempass1"> Generate OTP</h3>
      <form onSubmit={formHandler} id="form1">
      <input id="user1" type="text" value={Email1} placeholder="Enter Your Mail Address" onChange={(e)=>setEmail1(e.target.value)}/><br/>
      <div>
      {Error && Email1.length==0 ?<label id="uerror1" style={{color:'red'}}>Enter valid mail address</label>:""}
      </div>
      <input id="psw1" type="password"  value={Newpassword} placeholder="Create New Password" onChange={(e)=>setNewpassword(e.target.value)}/><br/>
      <div>
      {Error && Newpassword.length==0 ?<label id="perror1" style={{color:'red'}}>Password is required</label>:""}
      </div>
      <input id="otp1" type="text" value={otp} placeholder="Enter Your OTP" onChange={(e)=>setotp(e.target.value)}/><br/>
      <div>
      {Error && otp.length==0 ?<label id="oerror1" style={{color:'red'}}>Enter valid otp</label>:""}
      </div>
      <button id="login1" type="submit">SUBMIT</button>
    </form>
    </div>
    </>
  )
}
export default Forgot