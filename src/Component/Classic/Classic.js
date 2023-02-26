import React from 'react'
import './Classic.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
 function Classic() {
  return (
    <div>
    <div id="header1">
    <Link to={`/`}><HomeIcon id="home"/></Link>
   <h1 id="pop">CLASSIC BOOKS</h1>

   </div>
   <div id="over">
   <img id="book" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiaethMhJ6a4ylGKZK6H3s_6RUIYWFiIzwWQ&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/treasureofincass00hentiala/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdmOLU5Wt0eOTHFMpzmQe-IPniw0mOr8dTwg&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/ifastiovid00oviduoft/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrS24YUvA9KYxq2jgptVDDl6T8B0w97-XRA&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/angelofterror00walluoft/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYqqV0_1ku_QPHt_DWptgiLb12xEP8G1V4A&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/housewithoutkey00bigg/page/n1/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/1469506-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/housewithoutkey00bigg/page/n1/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/8294907-M.jpg"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/treasureofincass00hentiala/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/3362684-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/angelofterror00walluoft/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/2404583-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/ifastiovid00oviduoft/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default  Classic
