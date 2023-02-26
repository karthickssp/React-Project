import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Sub from "./Component/All/Sub"
import Art from "./Component/Art/Art"
import Bio from "./Component/Bio/Bio"
import History from "./Component/History/History"
import Medicine from "./Component/Medicine/Medicine"
import Science from "./Component/Science/Science"
import Popular from "./Component/Popular/Popular"
import Classic from "./Component/Classic/Classic"
import Kids from "./Component/Kids/Kids"
import Thriller from "./Component/Thriller/Thriller"
import Login from "./Component/Loginpage/Login"
import Forgot from './Component/Forgot/Forgot'
import App from './App' 
import About from './Component/About/About'
import Register from './Component/Resisterpage/Register'
import Notes from './Component/Notes/Notes'

export default function Start() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<App/>}/>
   <Route path="/Sub" element={<Sub/>}/>
   <Route path="/Login" element={<Login/>}/>
   <Route path="/Register" element={<Register/>}/>
   <Route path="/bio" element={<Bio/>}/>
   <Route path="/history" element={<History/>}/>
   <Route path="/medicine" element={<Medicine/>}/>
   <Route path="/art" element={<Art/>}/>
   <Route path="/science" element={<Science/>}/>
   <Route path="/forget" element={<Forgot/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/popular" element={<Popular/>}/>
   <Route path="/classic" element={<Classic/>}/>
   <Route path="/Kids" element={<Kids/>}/>
   <Route path="/Thriller" element={<Thriller/>}/>
   <Route path="/note" element={<Notes/>}/>

   </Routes>
   </BrowserRouter>
    </div>
  )
}
