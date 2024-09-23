import React from 'react';

let b = [
  {
    name: 'a',
    age: 10,
    gender: 'male',
  },
  {
    name: 'b',
    age: 20,
    gender: 'female',
  },
  {
    name: 'c',
    age: 30,
    gender: 'male',
  },
];

let data = b.map((item,i) =>{
  return (
    <div key={i}>
  <h1 className='text-4xl'>{item.name}</h1>
  <h4>{item.age}</h4>
  <p>{item.gender}</p>
  </div>
  )
} );
console.log(data);
const App = () => {
  return (
    <>
      <div>{data}</div>
    </>
  );
};

export default App;
