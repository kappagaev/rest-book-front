import { Link, useNavigate, useParams } from "react-router-dom"
import { apiDeleteBook } from "../axios/api"
import { useNotification } from "../context/NotificationContextProvider"
import { useFetch } from "../hooks/useFetch"
import { Book } from "./Books"

export const BookShow = () => {
  const id = useParams<{ id: string }>().id
  const { data } = useFetch<Book>({
    url: `/books/${id}`,
  })

  const { showNotification } = useNotification()
  const navigate = useNavigate()

  const onDelete = async () => {
    if (!confirm("Are you sure?")) {
      return
    }
    if (!id) {
      navigate("/books/")
      return
    }

    const responce = await apiDeleteBook(+id)
    if (responce.status === 204) {
      showNotification({
        title: "Success",
        message: "Book was deleted",
        status: "success",
      })
      navigate("/books")
    }
  }
  return (
    <div>
      <h1>Book</h1>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>

      <br />
      <Link className="btn btn-success" to={`/books/${id}/edit`}>
        Edit
      </Link>
      <button type="submit" className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
