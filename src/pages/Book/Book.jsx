import { BookOpen, Sparkles } from "lucide-react";
import { Link, useLoaderData } from "react-router";

const Book = ({ book, index }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = book;

  
  const numericRating = Number(rating) || 0;

  // Create 5 stars
  // If rating is 4.5 then 4 stars will be colored
  const stars = Array.from({ length: 5 }, (_, i) => {
    return i < Math.round(numericRating);
  });

  return (

    <Link to={`/bookDetails/${bookId}`}>
      <div className="group relative overflow-hidden rounded-[26px] bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border border-cyan-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-300 hover:-translate-y-2">

        {/* Background hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-200/10 to-emerald-200/10" />

        <div className="relative flex items-start gap-4 px-5 pt-5">

          <div className="flex flex-col text-start gap-3 flex-1">

            <span className="self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-[2px] uppercase bg-cyan-100 text-cyan-700 border border-cyan-200">
              {category}
            </span>

            <div className="relative self-center">

              <img
                src={image}
                alt={bookName}
                className="w-[100px] h-38 object-cover rounded-2xl border-4 border-white shadow-lg group-hover:scale-105 transition duration-300"
              />

              <div className="absolute -bottom-2 -left-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                <Sparkles size={12} />
              </div>

            </div>
          </div>
        </div>


        <div className="h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent mt-5" />


        <div className="relative px-5 py-5 space-y-4">

          <div>

            <h2 className="font-syne text-[18px] font-bold text-gray-900 leading-snug group-hover:text-cyan-700 transition-colors duration-300">
              {bookName}
            </h2>

            <p className="text-sm text-emerald-700 mt-1 font-medium">
              by {author}
            </p>

          </div>

          <div className="flex items-center gap-1">

            {stars.map((filled, i) => (
              <span
                key={i}
                className={`text-sm transition-transform duration-200 group-hover:scale-110 ${filled ? "text-amber-400" : "text-gray-200"
                  }`}
              >
                ★
              </span>
            ))}

            <span className="ml-2 text-xs font-semibold text-cyan-700">
              {numericRating}
            </span>

          </div>



          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
              <BookOpen size={14} className="text-cyan-600" />
              {totalPages} pages
            </span>

            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-xs font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
              Details
            </button>

          </div>


          <div className="pt-2 border-t border-cyan-100 flex items-center justify-between text-[11px]">

            <span className="font-semibold tracking-wide text-gray-500 uppercase">
              {publisher}
            </span>

            <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold">
              {yearOfPublishing}
            </span>

          </div>

        </div>
      </div>
    </Link>
  );
};

export default Book;