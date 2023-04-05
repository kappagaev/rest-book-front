import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { apiSignin, SigninDto } from "../axios/api"
import { useAuth } from "../context/AuthContextProvider"
import { useNotification } from "../context/NotificationContextProvider"

export const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninDto>()

  const { showNotification } = useNotification()
  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const onSubmit = async (data: SigninDto) => {
    const res = await apiSignin(data)

    if (res.status === 200) {
      const accessToken = res.data["access_token"]
      const payload = res.data["payload"]
      showNotification({
        title: "Success!",
        message: "User created successfully!",
        status: "success",
      })
      localStorage.setItem("accessToken", accessToken)
      setAuth(payload)
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
      <h1>Signin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}
