import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { apiCreateBook } from "../axios/api"
import { useNotification } from "../context/NotificationContextProvider"
import { Book } from "./Books"

export const BookCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>()

  const { showNotification } = useNotification()

  const navigate = useNavigate()

  const onSubmit = async (book: Book) => {
    const res = await apiCreateBook(book)
    if (res.status === 201) {
      const { id } = res.data
      showNotification({
        title: "Success!",
        message: "Target updated successfully!",
        status: "success",
      })
      navigate(`/books/${id}`)
    }
  }
  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="h2">Create Book</h2>
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
