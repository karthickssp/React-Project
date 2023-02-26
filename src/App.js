import Classicmove from './Component/Classic';
import Header from './Component/Header'
import Kidsmove from './Component/Kids';
import Popularmove from './Component/popular';
import Qoutes from './Component/Qoutes';
import Slideshow from './Component/Slideshow'
import Thrillermove from './Component/Thriller';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div><Header/></div>
      <div><Slideshow/></div>
      <div className="title">
        <div><Qoutes/></div>
        <br/>
        
        <div><Link to={`/popular`}><Popularmove/></Link></div>
        <div><Link to={`/classic`}><Classicmove/></Link></div>
        <div><Link to={`/kids`}><Kidsmove/></Link></div>
        <div><Link to={`/thriller`}><Thrillermove/></Link></div>
      </div>
    </>
  );
}

export default App;
