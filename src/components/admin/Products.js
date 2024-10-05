import { logDOM } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        async function postData() {
            axios
                .get("http://localhost/project/collections/all")
                .then((res) => {
                    console.log(res.data.data);
                    setBooks(res.data.data);
                });
        }

        postData();
    }, []);

    return (
        <>
            <h1>list of books</h1>
            {books.map((book) => (
                <p key={book.id}>{book.productName}</p>
            ))}
        </>
    );
}
