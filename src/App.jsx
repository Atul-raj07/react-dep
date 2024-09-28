import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState("")
  const [message, setmessage] = useState('')
  const inputHandler =(e) => {
    e.target.value.length >= 5 ? setmessage("is big") :setmessage( "is small")
    setusername(e.target.value)
  }
  const submitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <>
    <form onSubmit={submitHandler} >
        <div className="mb-4">
          <input
          onInput={inputHandler}
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="username"
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <p>{message}</p>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default App