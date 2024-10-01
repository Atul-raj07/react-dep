import React from 'react'

const Header = (props) => {
    const {title} = props;

  return (
    <div>
        <h1>this is {title}</h1>
    </div>
  )
}

export default Header