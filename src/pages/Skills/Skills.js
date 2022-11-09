import React from 'react'
import html5 from"../../icons/html5.svg" 
import css3 from"../../icons/css3.svg"
import javascript from"../../icons/javascript.svg"
import react from"../../icons/react.svg"
import sass from"../../icons/sass.svg"
import typeScript from "../../icons/typescript.svg"
import web from '../../icons/web.svg'
import responsive from "../../icons/responsive.svg"

function Skills() {
  return (
    <>
      <div className='Skills main-box'>
        <h2>my Skills</h2>
        <div className='skills-box'>
          <div className='skill'>
            <img src={html5} alt='html5'></img>
            <h3>Html5</h3>
          </div>
          <div className='skill'>
            <img src={css3} alt='css3'></img>
            <h3>css3</h3>
          </div>
          <div className='skill'>
            <img src={javascript} alt='javascript'></img>
            <h3>javascript</h3>
          </div>
          <div className='skill'>
            <img src={react} alt='react'></img>
            <h3>react</h3>
          </div>
          <div className='skill'>
            <img src={sass} alt='sass'></img>
            <h3>sass</h3>
          </div>
          <div className='skill'>
            <img src={typeScript} alt='typeScript'></img>
            <h3>typeScript</h3>
          </div>
        </div>
      </div>
      <div className='my-Capabilities main-box'>
        <h2>what can i do</h2>
        <div className='capabilities-box'>
          <div className='cap'>
            <img src={web} alt='web'></img>
            <h3>static website</h3>
          </div>
          <div className='cap'>
            <img src={responsive} alt='responsive'></img>
            <h3>responsive website</h3>
          </div>
          <div className='cap'>
            <img src={react} alt='single page application'></img>
            <h3>single page application</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
