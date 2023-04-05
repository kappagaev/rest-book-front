import { useState } from "react"
import { Link } from "react-router-dom"
import { Book } from "../../pages/Books"

interface Props {
  books: Book[] | undefined
}
export const BookTable = ({ books }: Props) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Назва</th>
        </tr>
      </thead>

      <tbody>
        {books?.map((book: Book) => (
          <tr key={book.id}>
            <th scope="row">{book.id}</th>
            <td>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
