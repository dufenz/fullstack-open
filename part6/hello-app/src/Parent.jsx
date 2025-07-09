import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <h2>I am the parent</h2>
      <Child text="hi from parent" />
    </div>
  )
}

export default Parent
