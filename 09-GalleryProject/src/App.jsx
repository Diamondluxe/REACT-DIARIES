import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from './component/Card'
import Button from './component/Button'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => { 
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getData();
  }, [index])

  let printUserData = <h3 className='text-xs text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading.....</h3>;

  if(userData.length > 0){
    printUserData = userData.map((user, idx) => {
      return <div key={idx}>
       <Card user={user} />
      </div>
    });
  }

  return (
    <div className='bg-black h-screen overflow-auto text-white p-4'>
      <div className='flex flex-wrap gap-4 lg:h-[82%]'>
        {printUserData}
      </div>
      <Button index={index} setIndex={setIndex} setUserData={setUserData} />
      
    </div>
  )
}

export default App
