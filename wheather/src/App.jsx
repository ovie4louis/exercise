import Greeting from "./Components/Greeting"
import UserStatus from "./Components/UserStatus"
import Weather from "./Components/Weather"
const App = () => {
  return (
    <div>
      <Greeting timeOfDay = "morning" />
      <Weather />
      <UserStatus loggedIn= {true} isAdmin={true}/>
    </div>
  )
}

export default App