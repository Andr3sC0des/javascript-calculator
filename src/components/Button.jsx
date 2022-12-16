import React, { useRef } from 'react'

const Button = ({ value, styles, update, id }) => {
  const button = useRef('')

  return (
    <>
      <button id={id} ref={button} onClick={update} style={styles} className='calculator__button'>
        {value}
      </button>
    </>
  )
}

export default Button
