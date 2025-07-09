import React, { useState, useImperativeHandle, forwardRef } from 'react'

const Togglable = forwardRef(({ buttonLabel, children }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideStyle = { display: visible ? 'none' : '' }
  const showStyle = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => ({
    toggleVisibility
  }))

  return (
    <div>
      <div style={hideStyle}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>
      <div style={showStyle}>
        {children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
})

export default Togglable
