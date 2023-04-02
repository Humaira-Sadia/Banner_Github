import React from 'react'
import './settings.css';

export default function Settings() {

  return (
    <div id='setting'>
      <div className="head"><h2>Editorial</h2></div>

      <div className="sub">

        <div className="main"><h2>Main</h2></div>
        <div className="bg"><h2>Background</h2></div>
        <div className="decor"><h2>Decorations</h2></div>

      </div>

      <div className="mainy">
        <div className="inputs">
          <input id='title' type="text" placeholder='Title' />
          <input id='sub-title' type="text" placeholder='Sub-Title' />
        </div>
      </div>

      <div className="color-picker picker">
        <div className="back-color">
          
        </div>
      </div>
    </div>
  )
}
