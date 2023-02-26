import React from 'react'
import './Medicine.css'
import ReplyIcon from '@mui/icons-material/Reply';
import { Link } from 'react-router-dom';
function Medicine() {
  return (
    <div >
    <div id="header1">
    <Link to={`/Sub`}><ReplyIcon id="home1"/></Link>
   <h1 id="pop">MEDICINE BOOKS</h1>
  
   </div>
   <div id="over">
   <img id="book" src="https://covers.openlibrary.org/b/id/8985511-M.jpg"/>
   <a class="h1" target="_blank" href="https://archive.org/details/cu31924029342254/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://covers.openlibrary.org/b/id/471503-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/1831notredamedep01hugo/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://covers.openlibrary.org/b/id/631414-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/anatomydescripti1887gray/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://covers.openlibrary.org/b/id/2385691-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/anatomyofmelanch02burt/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/b/id/1461836-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/anatomyofmelanch02burt/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/b/id/6640367-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/anatomydescripti1887gray/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/b/id/9106192-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/1831notredamedep01hugo/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/b/id/750157-M.jpg?default=%27https://openlibrary.org/images/icons/avatar_book.png%27"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/cu31924029342254/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
  )
}
export default Medicine