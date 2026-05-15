import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { Star, FileText, Calendar, BookOpen, Heart, ArrowLeft, Bookmark } from "lucide-react";

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId);

    const [wishlisted, setWishlisted] = useState(false);
    const [reading, setReading] = useState(false);

    if (!singleBook) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                        <BookOpen size={40} className="text-red-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-red-400">Book not found</h2>
                    <p className="text-slate-400">The book you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const {
        bookName,
        image,
        author,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = singleBook;

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={16}
                className={i < Math.floor(rating) ? "text-cyan-400 fill-cyan-400" : "text-slate-600"}
            />
        ));
    };

    return (
        <div
            className="min-h-screen bg-slate-950 text-white"
            style={{
                backgroundImage: `
          radial-gradient(ellipse at 10% 20%, rgba(6,182,212,0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 90% 80%, rgba(16,185,129,0.07) 0%, transparent 50%)
        `,
            }}
        >
            {/* Decorative grid lines */}
            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10">

                {/* Back button */}
                <Link to='/'>
                    <button className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200 mb-10">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
                        <span className="text-sm font-medium tracking-wide uppercase">Back to Library</span>
                    </button>
                </Link>


                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    <div className="lg:col-span-2 flex flex-col gap-6">

                        <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-500" />

                            <div className="relative bg-slate-900 rounded-2xl p-6 flex items-center justify-center overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-tr-full" />

                                <img
                                    src={image}
                                    alt={bookName}
                                    className="w-full max-w-[200px] rounded-xl shadow-2xl shadow-black/50 group-hover:scale-[1.02] transition-transform duration-500 object-cover"
                                />
                            </div>
                        </div>

                        {/* Stats bar */}
                        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-5 space-y-4">
                            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">Book Info</h3>

                            {[
                                { icon: <FileText size={15} />, label: "Pages", value: totalPages },
                                { icon: <BookOpen size={15} />, label: "Publisher", value: publisher },
                                { icon: <Calendar size={15} />, label: "Published", value: yearOfPublishing },
                            ].map(({ icon, label, value }) => (
                                <div key={label} className="flex items-center justify-between group/stat">
                                    <div className="flex items-center gap-2 text-slate-400 group-hover/stat:text-cyan-400 transition-colors duration-200">
                                        {icon}
                                        <span className="text-xs font-medium">{label}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">{value}</span>
                                </div>
                            ))}

                            <div className="pt-3 border-t border-slate-800">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-medium text-slate-400">Rating</span>
                                    <span className="text-sm font-bold text-cyan-400">{rating} / 5</span>
                                </div>
                                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-1000"
                                        style={{ width: `${(rating / 5) * 100}%` }}
                                    />
                                </div>
                                <div className="flex gap-1 mt-2">{renderStars(rating)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-7">

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">{category}</span>
                        </div>

                        <div>
                            <h1
                                className="text-4xl sm:text-5xl font-black leading-tight tracking-tight"
                                style={{
                                    background: "linear-gradient(135deg, #ffffff 0%, #a5f3fc 50%, #6ee7b7 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {bookName}
                            </h1>
                            <p className="mt-3 text-slate-400 text-lg">
                                <span className="text-slate-600">by</span>{" "}
                                <span className="text-cyan-300 font-semibold">{author}</span>
                            </p>
                        </div>

                        <div className="relative h-px">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                        </div>

                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-l-2xl" />
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-3">Review</p>
                            <p className="text-slate-300 leading-7 text-sm">{review}</p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500 mb-3">Tags</p>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 text-xs font-semibold rounded-lg border cursor-default select-none
                      bg-cyan-500/5 border-cyan-500/20 text-cyan-400
                      hover:bg-cyan-500/15 hover:border-cyan-500/40 hover:text-cyan-300
                      transition-all duration-200"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">

                            <button
                                onClick={() => setReading(!reading)}
                                className="relative group flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide overflow-hidden
                  border border-cyan-500/40 text-cyan-300 hover:text-white transition-colors duration-300"
                            >
                                <span
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 translate-x-[-100%]
                    group-hover:translate-x-0 transition-transform duration-300"
                                />
                                <span className="relative flex items-center justify-center gap-2">
                                    <BookOpen size={16} />
                                    {reading ? "Reading..." : "Read Now"}
                                </span>
                            </button>

                            <button
                                onClick={() => setWishlisted(!wishlisted)}
                                className={`relative group flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide
                  overflow-hidden transition-all duration-300 
                  ${wishlisted
                                        ? "bg-gradient-to-r from-emerald-600 to-cyan-600 border-transparent text-white shadow-lg shadow-emerald-900/30"
                                        : "bg-gradient-to-r from-emerald-500 to-cyan-500 border-transparent text-white hover:shadow-lg hover:shadow-emerald-900/30 hover:scale-[1.02]"
                                    }`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Heart size={16} className={wishlisted ? "fill-white" : ""} />
                                    {wishlisted ? "Wishlisted!" : "Wishlist"}
                                </span>
                            </button>

                            <button
                                className="w-[52px] h-[52px] rounded-xl border border-slate-700 bg-slate-900 hover:border-cyan-500/40
                  hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
                            >
                                <Bookmark size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;