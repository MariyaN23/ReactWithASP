import { Books } from "../components/Books.tsx";
import type { Book } from "../models/Book.ts";
import { useEffect, useState } from "react";
import { getAllBooks } from "../services/books.ts";

export const BooksPage = () => {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        const getBooks = async ()=> {
            try {
                setLoading(true)
                const books = await getAllBooks()
                setBooks(books)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        getBooks()
    }, [])

    return (
        <div>
            <button>Add book</button>
            {loading ?
                <p>Loading...</p>
                : <Books books={books} />
            }
        </div>
    )
}