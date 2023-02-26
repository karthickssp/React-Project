import React from 'react'
import'./Sub.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

 function Sub() {
  return (
    <div>
    <div id="header">
    <Link to={`/`}><HomeIcon id="hme"/></Link>
   <h1 id="popu">SUBJECTS</h1>
     </div>
     <div id ="ovr">
     <img id="bok"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-jbzAlh6hCO_6OgqLdvB-O-7BMwZK9U33g&usqp=CAU"/>
     <Link to={`/art`}><button id="brwse">Art</button></Link>
     <img id="bok1"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33tFssoGxlt_AWmtCnuNQH_8DTG5AU6BtcA&usqp=CAU"/>
     <Link to={`/medicine`}><button id="brwse1">Medicine</button></Link>
     <img id="bok2"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNJwDcZY_HUZRKRqtTdzMmYVvmM5-QD_ekQ&usqp=CAU"/>
     <Link to={`/science`}><button id="brwse2">Science</button></Link>
     <img id="bok3"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMm1C49uATZpWZ8ycaE7gYWRHIt0dI6blzA&usqp=CAU"/>
     <Link to={`/history`}><button id="brwse3">History</button></Link>
     <img id="bok4"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4IqN0H5_oEDDAsGqLWzP8u_LRoV_sqtJ3w&usqp=CAU"/>
     <Link to={`/bio`}><button id="brwse4">Biographies</button></Link>
     </div>
     </div>

   
  )
}
export default Sub
