import { useState } from "react"
import { Pagination } from "../components/Pagination"
import { BookTable } from "../components/table/BookTable"
import { useFetch } from "../hooks/useFetch"
import { PaginationResponse } from "../types/pagination"

export interface Book {
  id: number
  title: string
  description: string
  userId?: number
}

export const Books = () => {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const changePage = (page: number) => {
    setPage(page)
  }

  const { data } = useFetch<PaginationResponse<Book>>({
    url: `/books?page=${page}&limit=${limit}`,
  })

  return (
    <>
      <label htmlFor="limit">Limit</label>
      <select
        className="form-select"
        id="limit"
        onChange={(e) => setLimit(Number(e.target.value))}
        defaultValue={limit}
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <BookTable books={data?.data} />
      {data !== null && data?.total > limit ? (
        <Pagination {...data} onChange={changePage} />
      ) : null}
    </>
  )
}
