import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Build Something Amazing with Open-AI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, labore aperiam? Tenetur accusantium voluptatum incidunt! Iusto error corporis similique? Sequi esse, necessitatibus architecto ut nostrum impedit dignissimos exercitationem beatae id?</p>
        <div className="gpt3__header-content__input">
          <input type="email"  placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="" />
        </div>
      </div>

      <div className="gpt3__header-image">
      <img src={AI} />
    </div>
    </div>
  )
}

export default Header
