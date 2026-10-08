import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // We can do call data with two types fetch and axios. Here we are using fetch method to get data from API.
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   const data = await response.json()
  //   console.log(data)
  //   }


  const [data, setData] = useState({})


  //this is second way for this we first install axios library by using npm install axios command. After that we can use axios to get data from API.
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    setData(response.data)
  }

  localStorage.setItem('name', 'Dua Sheikh')
  localStorage.setItem('age', '18')
  localStorage.removeItem('age')
  const name = localStorage.getItem('name')
  console.log(name)
   localStorage.clear()



  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <h1>{data.title}</h1>
    </div>
  )
}

export default App
