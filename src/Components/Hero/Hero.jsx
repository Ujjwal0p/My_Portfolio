import React from 'react'
import './Hero.css'
import profile_img from '../../assets/ujjwal.png.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Ujjwal Patidar,</span> fullstack developer. </h1>
        <p>I'm fullstack developer from pune, india with 0 years of experience in xyz companies...</p>
        <div className="hero-action">
            <div className="hero-connect">
             <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero