import { useState } from "react"
import { Link } from "react-router-dom"
import { Book } from "../../pages/Books"

interface Props {
  books: Book[] | undefined
}
export const BookTable = ({ books }: Props) => {
  const [checked, setChecked] = useState<number[]>([])
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Назва</th>
          <th scope="col">Дії</th>
        </tr>
      </thead>

      <tbody>
        {books?.map((book: Book) => (
          <tr key={book.id}>
            <th scope="row">{book.id}</th>
            <td>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </td>
            <td>
              <input
                type="checkbox"
                onChange={() => {
                  if (checked.includes(book.id)) {
                    setChecked(checked.filter((id) => id !== book.id))
                  } else {
                    setChecked([...checked, book.id])
                  }
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
