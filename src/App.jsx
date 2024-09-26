  import React, { useState } from 'react'

  const App = () => {
    const [data, setdata] = useState('')
      console.log(data)
      
      const formHandler = (e)=>{
      e.preventDefault()
      e.target.reset()
    }
    return (
      <div>

  <form onSubmit={formHandler} >
    <input onChange={(e)=>{setdata(e.target.value)}} value={data}  type="text" name="firstname" placeholder='firstname' className='px-4 py-1 text-zinc-900 rounded-lg bg-zinc-200 m-5' />
    <button  className='px-6 py-2 rounded-lg bg-blue-600 m-5'>Submit</button>
  </form>
      </div>
    )
  }

  export default App