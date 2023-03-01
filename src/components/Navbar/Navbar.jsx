import React from 'react'
import './Navbar.css'

//import icons
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>
        <div className="menuDiv">
          <ul className="menuLists">
            
            <li className="navItem">
              <a href="#" className="menuLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">Our tours</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">Contact Us</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLink">Pages</a>
            </li>
          </ul>

          <div className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div className="socialIcon flex">
          <BsFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>

        <div className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar