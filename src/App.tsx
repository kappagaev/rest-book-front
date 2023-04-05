import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Outlet } from "react-router-dom"
import { NotificationBar } from "./components/UI/NotificationBar"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">User</Link>
        <Link to="/books">Books</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <NotificationBar />
      <Outlet />
    </div>
  )
}

export default App
