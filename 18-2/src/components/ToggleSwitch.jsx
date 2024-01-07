import React from 'react'
import './ToggleSwitch.css'

function ToggleSwitch({ userLang }) {
  return (
<center>
	<div className="switch">
	    <input id="language-toggle"
      className="check-toggle check-toggle-round-flat"
      type="checkbox"
      onChange={(e)=>userLang(e.target.checked)}
      />
	    <label htmlFor="language-toggle"></label>
	    <span className="on">فارسی</span>
	    <span className="off">انگلیسی</span>
  	</div>
 </center>

  )
}

export default ToggleSwitch