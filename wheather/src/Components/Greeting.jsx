const Greeting = (props) => {

 return props.timeOfDay === 'morning' ? (<h1>Good Morning</h1>) : (<h1>Good AfterNoon</h1>)

}

export default Greeting