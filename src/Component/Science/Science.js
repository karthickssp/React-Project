import React from 'react'
import './Science.css'
import { Link } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
function Science() {
  return (
    <div>
    <div id="header1">
    <Link to={`/Sub`}><ReplyIcon id="home1"/></Link>
   <h1 id="pop">SCIENCE BOOKS</h1>
  
   </div>
   <div id="over">
   <img id="book" src="https://covers.openlibrary.org/b/id/5760460-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a class="h1"target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://covers.openlibrary.org/b/id/313890-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a class="h1"target="_blank" href="https://archive.org/details/cu31924012243048/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://covers.openlibrary.org/b/id/581911-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a class="h1"target="_blank" href="https://archive.org/details/b32218631/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://covers.openlibrary.org/b/id/5774684-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a class="h1" target="_blank" href="https://archive.org/details/baconsnovumorgan00bacoiala/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/825884-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a class="h1" target="_blank" href="https://archive.org/details/cu31924012243048/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/5378174-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a class="h1" target="_blank" href="https://archive.org/details/b32218631/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/7914168-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a class ="h1" target="_blank" href="https://archive.org/details/baconsnovumorgan00bacoiala/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/8283901-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default  Science
