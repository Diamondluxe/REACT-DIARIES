import React from 'react'
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');

  const form = (e)=> {
    e.preventDefault();
    console.log('Submitted by:', name);

    setName('');

  }

  return (
    <form onSubmit={form}>
      <input 
      type="text" 
      placeholder="Enter your name.." 
      value = {name}
      onChange={(e)=> setName(e.target.value)}
      />
      <button type="submit">Submit</button>
      
    </form>
  )
}

export default App
