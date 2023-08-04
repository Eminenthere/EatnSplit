import React from 'react'

const Button = ({ children, onIsOpen }) => {
  return (
    <button onClick={onIsOpen} className='button'>
      {children}
    </button>
  )
}

export default Button
