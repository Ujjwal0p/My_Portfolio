import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ujjwal.png.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated and innovative Master’s student in Computer Applications at Ajeenkya DY Patil University, Pune, specializing in full stack development. </p>
                    <p>With a passion for building dynamic and user-centric applications, I’m skilled in both front-end and back-end technologies, and I have a strong foundation in programming, web development, and software engineering principles. I am driven by a desire to solve complex challenges through creative coding and am always eager to explore new tools and frameworks that enhance user experience and functionality.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>Kotlin</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"80%"}} /></div>
                    <div className="about-skill"><p>Python</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>DSA</p><hr style={{width:"75%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About