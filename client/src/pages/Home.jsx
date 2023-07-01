import React from 'react'
import { Link } from 'react-router-dom'
import aaaa from '../assets/avanthikaphoto1.jpeg'

const Home = () => {
  return (
    <div className="nav">
    <div className="image">
        <img src={aaaa} alt="" />

    </div>
    <div className="a">premium</div>
    <div className="b">Help</div>
    <div className="c">Download</div>
    <Link to={"/register"}>
        <div className='d'>Sign Up</div>
    </Link>
    <Link to={"/login"}>
        <div className='e'>Log In</div>
    </Link>
    </div>
  )
}

export default Home
