import { NavLink } from "react-router-dom"

export const NavBar = () => {
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
          <li className="nav-item">
            <NavLink end className="nav-link" to="/books/create">
              New Book
            </NavLink>
          </li>
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
        </ul>
      </div>
    </nav>
  )
}
