import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { apiCreateUser, CreateUserDto } from "../axios/api"
import { useNotification } from "../context/NotificationContextProvider"

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>()

  const { showNotification } = useNotification()
  const navigate = useNavigate()

  const onSubmit = async (data: CreateUserDto) => {
    const res = await apiCreateUser(data)

    if (res.status === 201) {
      console.log("success")

      showNotification({
        title: "Success!",
        message: "User created successfully!",
        status: "success",
      })
      navigate("/")
    } else {
      console.log("error")
      showNotification({
        title: "Error!",
        message: "Something went wrong!",
        status: "error",
      })
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}

          <label htmlFor="email">Email</label>
          <input type="text" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}

          <label htmlFor="password">Password</label>
          <input type="text" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
