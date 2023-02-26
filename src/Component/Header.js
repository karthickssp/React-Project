import React from 'react'
import Search from './Search'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <React.Fragment>
    <div className="header">
        <img className="applogo" src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"alt="logo"/>
        <div className="find">
        <Link to={'/note'}><div className="nnote">NOTES</div></Link>
        <Search className="search" placeholder="Enter a Book Name"></Search>
        <Link to={'/Sub'}><div className="explore">EXPLORE</div></Link>
        <Link to={'/Login'}><div className="loginbtn">LOGIN</div></Link>
        <Link to={'/Register'}><div className="regbtn">REGISTER</div></Link>
        </div>
    </div>
    <br/>
    <div className="wel-add">
        <h2>Welcome TO Open Library...</h2>
        <Link to={'/popular'}><div className="ppp">POPULAR</div></Link>
        <Link to={'/classic'}><div className="ccc">CLASSIC</div></Link>
        <Link to={'/Kids'}><div className="kkk">KIDS</div></Link>
        <Link to={'/Thriller'}><div className="ttt">THRILLER</div></Link>
    </div>
   
    </React.Fragment>
  )
}

export default Header