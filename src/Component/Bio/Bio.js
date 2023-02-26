import React from 'react'
import './Bio.css'
import { Link } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
function Bio() {
  return (
    <div>
    <div id="header1">
    <Link to={`/Sub`}><ReplyIcon id="home1"/></Link>
   <h1 id="pop">BIOGRAPHIE BOOKS</h1>

   </div>
   <div id="over">
   <img id="book" src="https://covers.openlibrary.org/b/id/11545-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1"  target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://covers.openlibrary.org/b/id/12742285-M.jpg"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/diaryofsamuelpep0000suit/page/10/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://covers.openlibrary.org/b/id/8516506-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/livesofenglish00john/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://covers.openlibrary.org/b/id/11545-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/southseasbeing00stev/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/12707931-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/excoloredman00johnrich/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/967072-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/diaryofsamuelpep0000suit/page/10/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/419959-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/livesofenglish00john/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/9255939-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/southseasbeing00stev/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
   </div>
   </div>
   
  )
}
export default Bio