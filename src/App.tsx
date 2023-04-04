import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">User</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
