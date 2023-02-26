import React, { useState } from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom';


function Register() {
    
    const[fname, setfname]= useState('');
    const[lname, setlname]= useState('');
    const[email, setemail]= useState('');
    const[des, setdes]= useState('');
    const[ins, setins]= useState('');
    const[zip, setzip]= useState('');
    const[mob, setmob]= useState('');
    const[psw, setpsw]= useState('');
    const[Error,setError]= useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        event.preventDefault();
        if (fname.length===0 || lname.length===0 || email.length===0 || des.length===0 || ins.length===0 || psw.length===0 || zip.length===0 || mob.length===0 )
        {
          setError(true);
        }
        if(fname && lname && email  && des && ins && zip && mob && psw)
        {
        const loginobj={
            firstname:fname,
            lastname:lname,
            Email:email,
            designation:des,
            instiute:ins,
            zipcode:zip,
            mobile:mob,
            pasword:psw,
        }
        
            navigate("/Login");
        }
    }
  return (
    <>
    <div className="backg">
    <div className='backwhite'></div>
    <div id='head'>Create new Account</div>
    <form class="form" onSubmit={formHandler}>
    <div id ="fname"> 
    FirstName :
    </div> 
   <input id="fname1" type="text" value={fname} placeholder="First Name" onChange={(e)=>setfname(e.target.value)}/><br/>
   <div>
        {Error && fname.length===0 ?
        <label id="ferror" style={{color:'red'}}>First name is required</label>:""}
    </div>
    <div id="lname">
    LastName :
    </div>
    <input id="lname1" type="text"  value={lname} placeholder="Last Name" onChange={(e)=>setlname(e.target.value)}/><br/>
    <div>
        {Error && lname.length===0 ?
        <label id="lerror" style={{color:'red'}}>Lastname is required</label>:""}
    </div>
    <div id="email">
    Email :
    </div>
    <input id="email1" type="email" value={email} placeholder="Email" onChange={(e)=>setemail(e.target.value)}/><br/>
    <div>
        {Error && email.length===0 ?
        <label id="eerror" style={{color:'red'}}>Email is required</label>:""}
    </div>
    <div id="designation">
    Designation :
    </div>
    <input  id="designation1" type="text" value={des} placeholder="Designation" onChange={(e)=>setdes(e.target.value)}/><br/>
    
    <div>
        {Error && des.length===0 ?
        <label id="edesignation" style={{color:'red'}}>Designation is required</label>:""}
    </div>
    <div id="institution">
    Institution:
    </div>
    <input id="institution1" type="text" value={ins} placeholder="Institution Name" onChange={(e)=>setins(e.target.value)}/><br/>
    <div>
        {Error && ins.length===0 ?
        <label id="einstitution" style={{color:'red'}}>Institution Name is required</label>:""}
    </div>
    <div id="zip">
    DOB :
    </div>
    <input id="zip1" pattern="^[0-9]{6}$" type="date" value={zip}  onChange={(e)=>setzip(e.target.value)}/><br/>
    <div>
        {Error && zip.length===0 ?
        <label id="ezip" style={{color:'red'}}>DOB is required</label>:""}
    </div>
    <div id="mobile">
    Mobile No:
    </div>
    <input id="mobile1" pattern="^[0-9]{10}$" type="text" value={mob} placeholder="Mobile No" onChange={(e)=>setmob(e.target.value)}/><br/>
    <div>
        {Error && mob.length===0 ?
        <label id="emobile" style={{color:'red'}}>Mobile No is required</label>:""}
    </div>
    <div id="password">
    password:
    </div>
    <input id="password1" pattern="^.{6,10}$" type="password" value={psw} placeholder="Password" onChange={(e)=>setpsw(e.target.value)}/><br/>
    <div>
        {Error && psw.length===0 ?
        <label id="epassword" style={{color:'red'}}>Password is required</label>:""}
    </div>
    
    <button id="button" type="submit"><h2>SIGN UP</h2></button>
    </form>
    <div id='register'>
    <Link to={'/Login'}><h2>Already Register?Login Here</h2></Link>
    </div>
    </div>
    </>
  )
}

export default Register