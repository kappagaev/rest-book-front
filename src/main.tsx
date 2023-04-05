import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import { NotificationContextProvider } from "./context/NotificationContextProvider"
import { About } from "./pages/About"
import { BookCreate } from "./pages/BookCreate"
import { BookEdit } from "./pages/BookEdit"
import { Books } from "./pages/Books"
import { BookShow } from "./pages/BookShow"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookShow />,
      },
      {
        path: "/books/:id/edit",
        element: <BookEdit />,
      },
      {
        path: "/books/create",
        element: <BookCreate />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NotificationContextProvider>
      <RouterProvider router={router} />
    </NotificationContextProvider>
  </React.StrictMode>
)
