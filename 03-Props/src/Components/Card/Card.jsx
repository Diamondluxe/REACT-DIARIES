import styles from './Card.module.css'


const Card = (props) => {

    // console.log(props.user) // Accessing the user prop passed from the parent component

  return (
    <div className={styles.card}>
        <img src={props.img} alt="Image" />
        <h1 >{props.user}</h1>
        <p>This is a simple component using props as age: {props.age}</p>
        <button>View {props.user}'s Profile</button>
    </div>
  )
}

export default Card
