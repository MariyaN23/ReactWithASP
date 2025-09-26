import type { Book } from "../models/Book.ts";

type Props = {
    books: Book[]
}

export const Books = ({books}: Props) => {
    return (
        <div className={'grid grid-cols-5'}>
            {books.map((book: Book) => (
                <div
                    key={book.id}
                    className={'p-3 text-left border border-blue-500'}
                >
                    <p>Title: {book.title}</p>
                    <p>Description: {book.description}</p>
                    <p>Price: {book.price}</p>
                </div>
            ))}
        </div>
    )
}