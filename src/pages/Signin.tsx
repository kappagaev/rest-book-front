import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { apiSignin, SigninDto } from "../axios/api"
import { useNotification } from "../context/NotificationContextProvider"

export const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninDto>()

  const { showNotification } = useNotification()
  const navigate = useNavigate()

  const onSubmit = async (data: SigninDto) => {
    const res = await apiSignin(data)

    if (res.status === 200) {
      const accessToken = res.data["access_token"]
      showNotification({
        title: "Success!",
        message: "User created successfully!",
        status: "success",
      })
      localStorage.setItem("accessToken", accessToken)
      navigate("/")
    } else {
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
