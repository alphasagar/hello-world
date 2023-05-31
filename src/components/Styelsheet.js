import React from 'react'
import './myStyle.css'

function Styelsheet(props) {

    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`}>
                stylesheets
        </h1>
    </div>
  )
}

export default Styelsheet