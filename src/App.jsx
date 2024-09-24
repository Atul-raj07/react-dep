import React, { useState } from 'react'

const App = () => {

  const [first,setfirst] = useState("jvhb")
  console.log(first)
  
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={()=>{setfirst("hello")}} className='px-4 py-1 bg-red-600 m-5' >click</button>
    </div>
  )
}

export default App