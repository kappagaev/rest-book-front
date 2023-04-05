import "bootstrap/dist/css/bootstrap.min.css"
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/Navbar"
import { NotificationBar } from "./components/UI/NotificationBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <NotificationBar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
