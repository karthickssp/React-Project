import React from 'react'
import './Thriller.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
 function Thriller() {
  return (
    <div>
    <div id="header">
    <Link to={`/`}><HomeIcon id="home"/></Link>
   <h1 id="pop">THRILLER BOOKS</h1>
  
   </div>
   <div id="over">
   <img id="book" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1589302519-51PeVt0WznL.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/cu31924012243048/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585335118-41bsvxNUSdL.jpg?crop=1xw:0.987xh;center,top&resize=480:*"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl44A62lEv4TN_SylOlrBLpsmZPj3w3fWi1g&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/prideprejudice00austuoft/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sleep-1572273378.jpg?resize=480:*"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/w/id/12015500-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/southseasbeing00stev/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/w/id/7013717-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/prideprejudice00austuoft/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/w/id/8576476-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/cu31924012243048/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/w/id/8275695-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/southseasbeing00stev/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default  Thriller
