import React from 'react'
import './Art.css'
import { Link } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';
 function Art() {
  return (
    <div>
    <div id="header1">
    <Link to={`/Sub`}><ReplyIcon id="home1"></ReplyIcon></Link>
   <h1 id="pop">ARTS BOOKS</h1>

   </div>
   <div id="over">
   <img id="book" src="https://covers.openlibrary.org/b/id/5760460-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://covers.openlibrary.org/b/id/6543272-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/caiipliniisecund03plinuoft/mode/1up?ref=ol&view=theater"><button id="browse1">Read</button></a>
   <img id="book2" src="https://covers.openlibrary.org/b/id/2003146-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/wildepoems00wildrich/mode/1up?ref=ol&view=theater"><button id="browse2">Read</button></a>
   <img id="book3" src="https://covers.openlibrary.org/b/id/3202771-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/8974653-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/caiipliniisecund03plinuoft/mode/1up?ref=ol&view=theater"><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/8229257-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/caiipliniisecund03plinuoft/mode/1up?ref=ol&view=theater"><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/6793480-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/caiipliniisecund03plinuoft/mode/1up?ref=ol&view=theater"><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/502719-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
   </div>
    </div>
   
  )
}
export default  Art