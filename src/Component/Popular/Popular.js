import React from 'react'
import './Popular.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
 function Popular() {
  return (
    <div>
    <div id="header1">
    <Link to={`/`}><HomeIcon id="home"/></Link>
   <h1 id="pop">MOST POPULAR BOOKS</h1>
 
   </div>
   <div id="over">
   <img id="book" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrsKVuXZDw9FWBWkkKpvB1HxsEZTUEwZADg&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMPaos6O0cqY_2Ejyv1dOGHLNmicJXrZhhA&usqp=CAU"/>
 <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4eeOtfHKhUuRH0GSDRb6sVoBXlMTK154Zg&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XWHUf60kJQViqsPAUltoWZc92r_fmzPh1w&usqp=CAU"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLdMYxG_naBHcS1Bfz_akMTQ9KqV5plvBCA&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLUv_o5yQQ6jBeGpHtSOYOznOd1H12xwrcg&usqp=CAU"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfjvV06dHq3fNRXRB9G1XfzHrYTQ88WnACg&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCnaB24Awz30iOtsTn3Sk7kF9pqDalEgQNRg&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default Popular
