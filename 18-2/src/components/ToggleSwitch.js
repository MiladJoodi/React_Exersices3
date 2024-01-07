import React from 'react'
import './ToggleSwitch.css'

function ToggleSwitch() {
  return (
    <div className="switch">
    <input
      id="language-toggle"
      className="check-toggle check-toggle-round-flat"
      type="checkbox"
      onChange={(event) => {
        if (event.target.checked) {
          i18n.changeLanguage("en");
        } else {
          i18n.changeLanguage("fa");
        }
      }}
    />
    <label htmlFor="language-toggle"></label>
    <span className="on">FA</span>
    <span className="off">EN</span>
  </div>
  )
}

export default ToggleSwitch