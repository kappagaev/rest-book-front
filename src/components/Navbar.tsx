import { NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContextProvider"

const AuthLinks = () => {
  const { logout } = useAuth()
  return (
    <>
      <li className="nav-item">
        <NavLink end className="nav-link" to="/books/create">
          New Book
        </NavLink>
      </li>
      <li className="nav-item">
        <a href="#" className="nav-link" onClick={logout}>
          Logout
        </a>
      </li>
    </>
  )
}

const GuestLinks = () => {
  return (
    <>
      <li className="nav-item">
        <NavLink end className="nav-link" to="/signup">
          Signup
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink end className="nav-link" to="/signin">
          Signin
        </NavLink>
      </li>
    </>
  )
}

export const NavBar = () => {
  const { payload } = useAuth()
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink end className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink end className="nav-link" to="/books">
              Books
            </NavLink>
          </li>
          {payload?.user_id ? <AuthLinks /> : <GuestLinks />}
        </ul>
      </div>
    </nav>
  )
}
