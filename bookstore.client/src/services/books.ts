import type { Book } from "../models/Book.ts";

export interface BookRequest {
    title: string
    description: string
    price: number
}

const url = 'https://localhost:7025/Books'

export const getAllBooks = async () => {
    const response = await fetch(url)
    return await response.json() as Book[]
}

export const createBook = async (bookRequest: BookRequest)=> {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(bookRequest),
        }
    })
}

export const updateBook = async (id: string, bookRequest: BookRequest)=> {
    await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(bookRequest),
        }
    })
}

export const deleteBook = async (id: string) => {
    await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}