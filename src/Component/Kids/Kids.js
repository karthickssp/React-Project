import React from 'react'
import './Kids.css'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
 function Kids() {
  return (
    <div>
    <div id="header1">
    <Link to={`/`}><HomeIcon id="home"/></Link>
   <h1 id="pop">KIDS BOOKS</h1>
  
   </div>
   <div id="over">
   <img id="book" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxq5TkthSoiPszPn4wdYmrHvqWd5UHQM_ggA&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse">Read</button></a>
   <img id="book1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh065vgWKMeUNc7Nj-q96OKsydLDsegFezOg&usqp=CAU"/>
  <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse1">Read</button></a>
   <img id="book2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmm5mL34Uf4VuTRAWNQXVhvVKZN1_tOGnmcQ&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse2">Read</button></a>
   <img id="book3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPumVzJ3w-n6IOS4xSxExiNuAGAC6mfLaWA&usqp=CAU"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse3">Read</button></a>
   <img id="book4" src="https://covers.openlibrary.org/w/id/7434839-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse4">Read</button></a>
   <img id="book5" src="https://covers.openlibrary.org/w/id/7442618-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse5">Read</button></a>
   <img id="book6" src="https://covers.openlibrary.org/w/id/7522813-M.jpg"/>
 <a  class="h1" target="_blank" href="https://archive.org/details/goetheswerke25goetuoft/mode/1up?ref=ol&view=theater" ><button id="browse6">Read</button></a>
   <img id="book7" src="https://covers.openlibrary.org/w/id/8981245-M.jpg"/>
   <a  class="h1" target="_blank" href="https://archive.org/details/aristotelisdemor00aris/page/n4/mode/1up?ref=ol&view=theater" ><button id="browse7">Read</button></a>
    </div>
    </div>
   
  )
}
export default Kids
