import axios from "axios"
import { Book } from "../pages/Books"

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

export interface SigninDto {
  email: string
  password: string
}
export const apiSignin = (user: SigninDto) => {
  return api.post("/auth/signin", user)
}

export interface CreateBookDto {
  title: string
  description: string
}
export const apiCreateBook = async (book: CreateBookDto) => {
  const res = await api.post<Book>("/books", book)
  return res
}

export interface UpdateBookDto {
  title: string
  description: string
}
export const apiUpdateBook = (id: number, book: UpdateBookDto) => {
  return api.put(`/books/${id}`, book)
}
