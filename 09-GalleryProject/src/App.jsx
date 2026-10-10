import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => { 
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    console.log(response.data)
  }



  return (
    <div className='bg-black h-screen text-white p-4'>
      <button 
        onClick={getData}
        className='bg-green-600 active:scale-95 text-white px-5 py-2 rounded '>
        get data
      </button>
    </div>
  )
}

export default App
