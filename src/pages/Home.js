import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer'>
          <h1>Tanmay's Pizzeria</h1>
          <p>PIZZA TO FIT ANY TASTE</p>
          <Link to='/menu'>
          <button>Order Now</button>
          </Link>
      </div>
    </div>
  )
}
