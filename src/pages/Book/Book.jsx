import React, { use } from 'react';
import { Star, BookOpen, Calendar, FileText } from "lucide-react";

const Book = ({ book }) => {
    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        publisher,
        yearOfPublishing,
    } = book;
    // const Book = ({handleBooks}) => {
    // const book= use(handleBooks);

    console.log(book);
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">

            {/* Image Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 flex items-center justify-center">
                <img
                    src={image}
                    alt={bookName}
                    className="h-64 object-contain group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">

                {/* Category + Rating */}
                <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {category}
                    </span>

                    <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                        <Star size={18} fill="currentColor" />
                        <span>{rating}</span>
                    </div>
                </div>

                {/* Book Name */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
                        {bookName}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        By <span className="font-medium">{author}</span>
                    </p>
                </div>

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {review}
                </p>

                {/* Info */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">

                    <div className="flex items-center gap-2">
                        <FileText size={16} />
                        <span>{totalPages} Pages</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{yearOfPublishing}</span>
                    </div>

                    <div className="flex items-center gap-2 col-span-2">
                        <BookOpen size={16} />
                        <span>{publisher}</span>
                    </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default Book;