import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { apiUpdateBook } from "../axios/api"
import { useNotification } from "../context/NotificationContextProvider"
import { useFetch } from "../hooks/useFetch"
import { Book } from "./Books"

export const BookEdit = () => {
  const id = useParams<{ id: string }>().id
  const { data: book } = useFetch<Book>({
    url: `/books/${id}`,
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Book>()

  const { showNotification } = useNotification()

  const navigate = useNavigate()

  const onSubmit = async (book: Book) => {
    if (!id) return
    const responce = await apiUpdateBook(+id, book)
    if (responce.status === 200) {
      showNotification({
        title: "Success!",
        message: "Book updated successfully!",
        status: "success",
      })
      navigate(`/books/${id}`)
    }
  }
  useEffect(() => {
    console.log(errors)
  }, [errors])

  useEffect(() => {
    if (!book) return
    setValue("title", book.title)
    setValue("description", book.description)
  }, [book])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="h2">
        Edit Book #{book?.id} Title: {book?.title}
      </h2>
      <div className="form-group p-10">
        <label htmlFor="bookTitle">Title</label>
        <input
          {...register("title", {
            required: true,
          })}
          type="text"
          className="form-control"
          id="bookTitle"
          aria-describedby="emailHelp"
          placeholder="Enter title"
        />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <label htmlFor="bookDescription">Description</label>
          <input
            {...register("description", {
              required: true,
            })}
            id="bookDescription"
            type="text"
            className="form-control"
            placeholder="First description"
          />
        </div>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
