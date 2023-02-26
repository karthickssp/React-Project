import React from 'react'
import './History.css'
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
 function History() {
  return (
    <div>
    <div id="header1">
    <Link to={`/Sub`}><ReplyIcon id="home1"/></Link>
   <h1 id="pop">HISTORY BOOKS</h1>
   </div>
   <div id="over">
   <img id="book" src="https://covers.openlibrary.org/b/id/12648793-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/storyoftreasures00nesbrich/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://covers.openlibrary.org/b/id/45979-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://covers.openlibrary.org/b/id/102127-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/storyoftreasures00nesbrich/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://covers.openlibrary.org/b/id/6717853-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/8595966-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/alicesadventures0000unse_r2e4/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/12593945-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/104355-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/alicesadventures0000unse_r2e4/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/2626880-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/prideprejudice00austuoft/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default History
