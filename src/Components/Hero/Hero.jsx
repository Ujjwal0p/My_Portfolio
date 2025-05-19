// import React from 'react'
// import './Hero.css'
// import profile_img from '../../assets/ujjwal.png.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Typed from 'typed.js'

// const Hero = () => {
//   const typedElement = useRef(null); // Create a ref for the text
//   const typedInstance = useRef(null); // To store the Typed instance

//   useEffect(() => {
//     typedInstance.current = new Typed(typedElement.current, {
//       strings: ["I'm Ujjwal Patidar,"], // Text you want to type
//       typeSpeed: 50,
//       backSpeed: 30,
//       backDelay: 1500,
//       loop: true,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     // Cleanup on unmount
//     return () => {
//       typedInstance.current.destroy();
//     };
//   }, []);
//   return (
//     <div id='home' className='hero'>
//         <img src={profile_img} alt="" />
//         <h1><span>I'm Ujjwal Patidar,</span> fullstack developer. </h1>
//         <p>I'm fullstack developer from pune, india with 0 years of experience in xyz companies...</p>
//         <div className="hero-action">
//             <div className="hero-connect">
//              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
//             </div>
//             <div className="hero-resume">My Resume</div>
//         </div>
//     </div>
//   )
// }

// export default Hero


import React, { useRef, useEffect } from 'react';
import './Hero.css';
import profile_img from '../../assets/ujjwal.png.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null); // Create ref for Typed text

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack developer."], // Typing text
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        I'm Ujjwal Patidar  <span ref={el}></span>
      </h1>
      <p>I'm fullstack developer from Pune, India with 0 years of experience in xyz companies...</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
