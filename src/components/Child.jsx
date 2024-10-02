import React from 'react'

const Child = (props) => {
    const { children} = props
  return (
    <div className='px-4 py-6 bg-zinc-200 text-black'>{children}</div>
  )
}

export default Child