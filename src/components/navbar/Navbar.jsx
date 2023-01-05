import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import { RiCloseLine } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';

const Menu=()=>{
  <>
   <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is gpt3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Study</a></p>
        <p><a href="#blog">Library</a></p>
  </>
}
const Navbar = () => {
  const [toggleMenu,setTogglemenu]=useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="" />
      </div>
      <div className='gpt3__navbar-links_container'>
      <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is gpt3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Study</a></p>
        <p><a href="#blog">Library</a></p>
      </div>
      </div>

      <div className='gpt3__navbar-sign'>
<p>Sign In</p>
<button> Sign Up</button>
      </div>

      {/* //mobile */}
      <div className="gpt3__navbar-menu">
    {toggleMenu?
    <RiCloseLine color='#fff' size={27}
    onClick={()=>setTogglemenu(false)}/>
  :<FiMenu color='#fff' size={27}
  onClick={()=>setTogglemenu(true)}/>}

  {toggleMenu &&(
    <div className='gpt3__navbar-menu_container  scale-up-center'>
<div className='gpt3__navbar-menu_container-links'> 
<p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is gpt3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Study</a></p>
        <p><a href="#blog">Library</a></p>
</div>
<div className='gpt3__navbar-menu_container-links-sign'>
<p>Sign In</p>
<button> Sign Up</button>
      </div>
    </div>
  )}
      </div>




      
    </div>
  )
}

export default Navbar
