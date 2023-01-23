import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

export default function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <h2>Tanmay's Pizzaeria🍕</h2>
            <p>Our product is standardised across the Nation, supported by a robust supply chain providing all the ingredients required to perfectly craft our Pizza. Our outlets are designed by leading architects to reflect our philosophy of being open and inviting, while putting our customer comfort on priority.
            Everywhere we go, we hear Tanmay's Pizzaeria is the tastiest pizza around, why aren’t you open in my location’. The answer is simple, every outlet opened is a promise to our customer, and not one we take lightly.</p>
        </div>
    </div>
  )
}
