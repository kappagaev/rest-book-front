import axios from "axios"

const baseURL = "http://localhost/api"

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api

export const apiGetBooks = () => {
  return api.get("/books")
}

export const apiDeleteBook = (id: number) => {
  return api.delete(`/books/${id}`)
}

export interface CreateUserDto {
  name: string
  email: string
  password: string
}

export const apiCreateUser = (user: CreateUserDto) => {
  return api.post("/users", user)
}
