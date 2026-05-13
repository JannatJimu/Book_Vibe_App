import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {

    // option 1-----
    // const [books, setBooks] = useState([]);
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setBooks(data));
    // }, [])

    // option 2 ---------------
    // const handleBooks =fetch('booksData.json')
    // .then(res=>res.json())

    return (
        // <div>
        //     <h2>hello ami books</h2>
        //     <Suspense fallback={<span>Loading.....</span>}>
        //    {/* <Book handleBooks={handleBooks}></Book> */}
        //     </Suspense>
        // </div>

        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-gray-800">
                    Explore Books
                </h2>

                <p className="text-gray-500 mt-3 text-lg">
                    Discover your next favorite book
                </p>
            </div>

            <Suspense fallback={<span>Loading.....</span>}>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((book) => (
                        <Book book={book} key={book.bookId} />
                    ))}
                </div>

            </Suspense>
        </div>
    );
};

export default Books;