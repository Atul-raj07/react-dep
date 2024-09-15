import React from 'react'

let a = "5";

const App = () => {
  return (
    <>
      <h1 className='text-5xl text-red-500'>This is a react App testing</h1>
      <br />
      <h2> {import.meta.env.VITE_API_KEY }</h2>
      
    </>
  )
}

export default App
