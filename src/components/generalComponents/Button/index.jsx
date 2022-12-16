import React from 'react'
import './buttons.css'

const Button = ({type, className, children}) => {
  return (
      <button type={type} className={className}>
          {children}
    </button>
  )
}

export { Button }