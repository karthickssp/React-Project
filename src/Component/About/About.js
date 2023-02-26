import React from 'react'
import "./About.css";
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div class="head">
     <h1 class="Abo">About Us</h1>
     <Link to={`/Login`}><h1 class="home">BACK</h1></Link>
     </div>
     <br/>
    <div class="bg">
     <br/><br/>
 <center> <h2>We Believe that World Change Starts with Educated Children.</h2></center>

     <h1 class="vis">Our Vision</h1>
    <center> <p class="opn">Open Library is the global hub for leading-edge thinking on the impact of coaching, promoting<br></br> societal well-being and human development.</p></center>
<h1 class="mis">Our Mission</h1>
    <center> <p class="app">To influence coaching professionals and global leaders on how coaching contributes<br></br> to the best possible futures for work, education, and planetary ecology.</p></center>
     <h1 class="aud">Our Audiences</h1>
  <center>  
     <img class="img" src="https://thoughtleadership.org/wp-content/uploads/2021/08/Audience.png" alt="Source"></img></center>
    <div class="address">
     <h3 class="info"> Information:</h3>
      <p class="add">
      WWHG+28R, Golf Rd, Arivoli Nagar,<br/> Vivekanandapuram, Kovaipudur, <br/>Tamil Nadu 641042
    </p>
    </div>
    <div class="mobile">
    <h3 class="ins"> Contact US:</h3>
    <p class="con"> 9080596579</p>
    <p class="mai">727821tuit047@skct.edu.in</p>
    </div>
     </div>
     </>

  )
}

export default About