import React from 'react'
import './hero.scss'
function Hero() {
  return (
    <>
    <div className='hero'>
        <p className='online'><span></span>Online</p>
        <h1 className='name'>Hello I'm <span className='marker'> Abdul Samad </span>
        <br/>
        <span className='gradient'>FrontEnd Web Developer</span>
        </h1>
        <div className='buttons'>
            <a href='' >
                <span>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                Mail
            </a>
            <a href='' >
                <span>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                Mail
            </a>
            <a href='' >
                <span>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                Mail
            </a>
        </div>
        <p className='paragraph spna-line'>
        <span className='span-line-inner'>Hi</span>
        <span className='span-line-inner'>I am Abdul Samad, Experienced</span>
        <span className='span-line-inner'>FrontEnd Web developer</span>
        <span className='span-line-inner'>Based in Abu Dhabi,</span>
        <span className='span-line-inner'>with 5 years of expertise </span>
        <span className='span-line-inner'>in React, Html, CSS, Javascript, Wordpress, Framer, Webflow, Node.js, and Postgres.</span>
        <span className='span-line-inner'>Ready to create innovative web solutions!</span>

          
          
         
        </p>
        <hr />

    </div>

    </>
  )
}

export default Hero