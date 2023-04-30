import React from "react";

import { useNavigate } from 'react-router-dom'
import { rentBook } from "../../../repository/book_apis";

export default function BookListItem({ book, getBooks }) {
    const navigate = useNavigate();
    return (
        <div style={{
            flexDirection: 'row',
            width: "80%",
            height: '30px',
            lineHeight: '30px',
            backgroundColor: 'lightgray',
            margin: '5px 50px',
            display: 'flex',
            padding: '0px 50px'
        }}>
            <div>
                {book.name} - {book.category} Available copies:{book.availableCopies}
            </div>
            <div style={{ marginLeft: 'auto' }}>
                <input type="button" value={'PREVIEW'} onClick={() => { navigate(`/books/${book.id}`) }} />
                <input type="button" value={'RENT'} onClick={() => {
                    rentBook(book.id)
                    getBooks()
                }} />
                <input type="button" value={'EDIT'} />
                <input type="button" value={'DELETE'} />
            </div>
        </div>
    )
}