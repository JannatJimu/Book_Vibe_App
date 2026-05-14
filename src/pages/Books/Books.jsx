import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="mb-10 text-center ">
        <h2 className="font-serif text-4xl font-semibold text-gray-900">
          Explore Books
        </h2>
        <div className=" w-9 h-0.5 bg-amber-600 mt-2 mb-2 rounded-full mx-auto" />
        <p className="text-sm text-gray-400">Discover your next favorite read</p>
      </div>

      <Suspense fallback={<p className="text-gray-400 text-sm">Loading...</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((book) => (
            <Book book={book} key={book.bookId} />
          ))}
        </div>
      </Suspense>

    </div>
  );
};

export default Books;