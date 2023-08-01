import React from 'react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
  
  return <div className='land-wrapper'>
    <img src='https://i.pinimg.com/736x/3e/06/71/3e06710fb1062186a729fd4cdb87cb5a.jpg' alt='LandingPage' style={{height:"30rem", boxShadow: "5px 5px whitesmoke"}}/>
    <button className='land-btn'><Link to={'/postview'} className='link'>Enter</Link></button>
  </div>;
}
