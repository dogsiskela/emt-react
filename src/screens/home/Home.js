import React, { useEffect, useState } from "react";
import { fetchAllBooks } from "../../repository/book_apis";
import BookListItem from "./local_components/BookListItem";

export default function Home() {
    const [booksData, setBooksData] = useState([])


    function getBooks() {
        fetchAllBooks().then(res => {
            setBooksData(res)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <h5>
                Books list - HOME
            </h5>
            {booksData.map(el => {
                return <BookListItem
                    book={el}
                    getBooks={getBooks}
                />
            })}
        </div>
    )
}