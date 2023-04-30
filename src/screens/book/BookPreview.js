import React, { useEffect, useState } from "react";
import { fetchSingleBook } from "../../repository/book_apis";
import { useParams } from "react-router-dom";

export default function BookPreview() {
    const { id } = useParams()

    const [bookData, setBookData] = useState()

    useEffect(() => {
        fetchSingleBook(id).then(res => {
            setBookData(res)
        })
    }, [])

    useEffect(() => {
        console.log(bookData)
    }, [bookData])

    return (
        <div>
            <h5>
                Books preview
            </h5>
            {bookData && <div>{bookData.name}</div>}
        </div>
    )
}