import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Child from './components/Child'

const App = () => {
  return (
    <>
    <Nav title ="NavBar lololo" />
    <Header title ="Header lololo" />
    <Child>
      <h1>hello child </h1>
      <p>dfnhdijkfjmk</p>
      <button>explore</button>
    </Child>
    </>
  )
}

export default App