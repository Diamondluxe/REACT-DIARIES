import Card from './Components/Card/Card.jsx'

const App = () => {

const Profiles = [
{
  user: "Dua",
  age: 18,
  img: "https://images.unsplash.com/photo-1732984003617-4ad44731ac62?q=80&w=498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {
  user: "Diamond",
  age: 20,
  img: "https://images.unsplash.com/photo-1555286103-cf231bd86ab3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
  {
  user: "Dodo",
  age: 22,
  img: "https://images.unsplash.com/photo-1778351984093-ff1e2771aae9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
] //i have created an array of objects and each object has user, age and img properties. Now i can use map function to send these objects as props to the child component


  return (
    <div className="parent">
     { Profiles.map((elem, index) => (
        <div key={index} >
          <Card user={elem.user} age={elem.age} img={elem.img} />
        </div>
      ))}



     
      {/* <Card user="Dua" age={18} img="https://images.unsplash.com/photo-1732984003617-4ad44731ac62?q=80&w=498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Diamond" age={20} img="https://images.unsplash.com/photo-1555286103-cf231bd86ab3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Dodo" age={22} img="https://images.unsplash.com/photo-1778351984093-ff1e2771aae9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      this is a way to send props to the child component single one by one but we can send them as an object as well using map function and array of objects */} 
      
    </div>
  )
}

export default App
