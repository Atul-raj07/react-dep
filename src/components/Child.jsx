import React from 'react'

const Child = (props) => {
    const { children} = props
    console.log(children);
    
  return (
    <div>Child {children}</div>
  )
}

export default Child