import React from 'react'
import Section2 from './components/Section2/Section2.jsx'
import Section1 from './components/Section1/Section1.jsx'

const App = () => {

const users = [
  {
    img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro: '',
    color: 'lightseagreen',
    tag: 'Satisfied'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro: '',
    color: 'blue',
    tag:'UnderServed'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    color: 'orange',
    tag:'Underbanked'
  },
  {
    img:'https://images.unsplash.com/photo-1545184180-25d471fe75eb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
    intro:'',
    color: 'royalblue',
    tag:'Average'
  },
  {
    img:'https://images.unsplash.com/photo-1603575448878-868a20723f5d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww',
    intro:'',
    color: 'black',
    tag:'Beginner'
  }
]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
