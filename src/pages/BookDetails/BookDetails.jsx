import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { Star, FileText, Calendar, BookOpen, Heart, ArrowLeft, Building2 } from "lucide-react";
import { addToStoredDB } from "../../utility/addToDB";

const BookDetails = () => {

    const { id } = useParams();
    const bookId = parseInt(id);
    const data   = useLoaderData();
    const book   = data.find((b) => b.bookId === bookId);

    const [isRead,       setIsRead]       = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <p className="text-2xl font-bold">Book not found</p>
            </div>
        );
    }

    const { bookName, image, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const handleMarkAsRead = () => { addToStoredDB("readList", bookId); setIsRead(true); };
    const handleWishlist   = () => { addToStoredDB("wishList", bookId); setIsWishlisted(true); };

    return (
        <div className="min-h-screen bg-slate-950 text-white text-sm">
            <div className="max-w-4xl mx-auto px-5 py-8">

                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 mb-7 transition-colors"
                >
                    <ArrowLeft size={14} />
                    Back to Library
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    <div className="lg:col-span-2 space-y-4">

                        <div className="bg-slate-900 rounded-2xl p-4">
                            <img
                                src={image}
                                alt={bookName}
                                className="w-[85%] mx-auto rounded-xl object-cover"
                            />
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-4 space-y-3">

                            <InfoRow icon={<FileText size={13} />}  label="Pages"     value={totalPages} />
                            <InfoRow icon={<Building2 size={13} />} label="Publisher" value={publisher} />
                            <InfoRow icon={<Calendar size={13} />}  label="Year"      value={yearOfPublishing} />

                            <div className="pt-3 border-t border-slate-800">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400">Rating</span>
                                    <span className="text-cyan-400 font-semibold">{rating} / 5</span>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star
                                            key={i}
                                            size={13}
                                            className={i < Math.floor(rating) ? "text-cyan-400 fill-cyan-400" : "text-slate-700"}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="lg:col-span-3 space-y-4">

                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                            {category}
                        </span>

                        <div>
                            <h1 className="text-3xl font-black leading-tight">{bookName}</h1>
                            <p className="mt-1.5 text-slate-400">By {author}</p>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-4">
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                Review
                            </p>
                            <p className="text-slate-300 leading-6">{review}</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                                Tags
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-1">

                            <button
                                onClick={handleMarkAsRead}
                                disabled={isRead}
                                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2 transition-colors text-xs"
                            >
                                <BookOpen size={14} />
                                {isRead ? "Added to Read List" : "Mark as Read"}
                            </button>

                            <button
                                onClick={handleWishlist}
                                disabled={isWishlisted}
                                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center gap-2 transition-colors text-xs"
                            >
                                <Heart size={14} className={isWishlisted ? "fill-white" : ""} />
                                {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ icon, label, value }) => (
    <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-slate-400">
            {icon}
            {label}
        </span>
        <span className="text-white">{value}</span>
    </div>
);

export default BookDetails;