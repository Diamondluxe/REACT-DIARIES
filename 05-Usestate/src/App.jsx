import React from 'react'

const App = () => {

  const [num, setNum] = React.useState(0)
  const [user, setuser] = React.useState({username: "Dua", email: "dua@example.com", age: 18})
  const [userr, setuserr] = React.useState({username: "Dua", email: "dua@example.com", age: 18})
  const [a, setA] = React.useState(20)

  const seta = () => {
    setA(prev => prev + 1)
    setA(prev => prev + 1)
    setA(prev => prev + 1)

    // its still gonna +1 only single time because react batches the state updates and only applies the last one in the same loop. So even though we call setA three times, it will only increment by 1. If you want to increment by 3, you can use the prev func like above
    // setA(a+1)
    // setA(a+1)
    // setA(a+1)
  }

  const btnClick = () => {
    let newUser = {...user}
    newUser.username = "Diamond"
    newUser.email = "diamond@example.com"
    newUser.age = 20
    setuserr(newUser)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Increase</button>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
      <button onClick={() => setNum(num + 5)}>Jump by 5</button>

      {/* we have many ways.. */}
      <h1>Username is {user.username} <br />Email is {user.email} <br />Age is {user.age}</h1>
      <button onClick={() => setuser({username: "Diamond", email: "diamond@example.com", age: 20})}>Change User</button>
      <h1>Username is {userr.username} <br />Email is {userr.email} <br />Age is {userr.age}</h1>
      <button onClick={btnClick}>Change User</button>
      <button onClick={seta}>{a}</button>
    </div>
  )
}

export default App




















// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(20)
//   const [username, setUsername] = useState("Dua")
//   const [users, setUsers] = useState([10, 20, 30, 40, 50])

//   function change(){
//     setA(777)
//     setUsername("Diamond")
//     setUsers([60,70,80])

//   }
  

//   return (
//     <div>
//       <h1>Value of Num is {a} <br /><br />Username is {username} <br /><br />Users are {users}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App
