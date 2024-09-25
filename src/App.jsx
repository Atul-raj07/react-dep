import React, { useState } from 'react'

const App = () => {

  // let [time,settime] = useState(new Date().toLocaleTimeString())
//  setInterval(()=>{
//     settime(new Date().toLocaleTimeString())
//   } )
  // clearInterval()
  const formHandler = (e)=>{
    e.preventDefault()
    console.log(e.target.username.value)
    e.target.reset()
  }

  return (
    <div>
      {/* <h1>{time}</h1> */}

<form onSubmit={formHandler} >
  <input type="text" name="username" placeholder='name' className='px-4 py-1 text-zinc-900 rounded-lg bg-zinc-200 m-5' />
  <button  className='px-6 py-2 rounded-lg bg-blue-600 m-5'>Submit</button>
</form>

      {/* <h1>{first}</h1>
      <button  className='px-4 py-1 bg-red-600 m-5' ></button> */}
    </div>
  )
}

export default App