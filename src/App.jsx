import React from 'react'
import './App.css'
import { Footer,Blog,Features,Header,Possibility,WhatGpt3 } from './containers'
import{CTA,Brand,Navbar} from './components'

const App = () => {
  return (
    <div>
      <div className='App'>
<div className="gradient__bg">
  <Navbar/>
  <Header/>
</div>
<Brand/>
<WhatGpt3/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>

      </div>
      
    </div>
  )
}

export default App
