import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { Star, Trash2, ExternalLink } from "lucide-react";
import { getStoredBook, removeFromStoredDB } from "../../utility/addToDB";

const ListedBooks = () => {

    const allBooks = useLoaderData();

    const [activeTab, setActiveTab] = useState("read");
    const [sortBy, setSortBy] = useState("default");

    const [readIds, setReadIds] = useState(() => getStoredBook("readList"));
    const [wishlistIds, setWishlistIds] = useState(() => getStoredBook("wishList"));

    const readBooks = allBooks.filter((b) => readIds.includes(b.bookId));
    const wishlistBooks = allBooks.filter((b) => wishlistIds.includes(b.bookId));

    const currentList = activeTab === "read" ? readBooks : wishlistBooks;

    const sortedList = [...currentList].sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "pages") return b.totalPages - a.totalPages;
        if (sortBy === "year") return b.yearOfPublishing - a.yearOfPublishing;
        return 0;
    });

    const handleRemove = (bookId) => {
        const key = activeTab === "read" ? "readList" : "wishList";

        removeFromStoredDB(key, bookId);

        if (activeTab === "read") {
            setReadIds((prev) => prev.filter((id) => id !== bookId));
        } else {
            setWishlistIds((prev) => prev.filter((id) => id !== bookId));
        }
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

            <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />
            <div className="max-w-4xl mx-auto px-6 py-12">

                <div className="flex gap-3 mb-10">

                    <PillTab
                        label="Read Books"
                        count={readBooks.length}
                        active={activeTab === "read"}
                        activeColor="bg-cyan-500"
                        onClick={() => setActiveTab("read")}
                    />

                    <PillTab
                        label="Wishlist"
                        count={wishlistBooks.length}
                        active={activeTab === "wishlist"}
                        activeColor="bg-emerald-500"
                        onClick={() => setActiveTab("wishlist")}
                    />

                </div>

                <div className="flex items-center justify-between mb-6">

                    <p className="text-slate-400 text-sm">
                        {sortedList.length} {sortedList.length === 1 ? "book" : "books"}
                    </p>

                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="bg-slate-800 text-slate-300 text-sm px-4 py-2 rounded-xl border border-slate-700 outline-none cursor-pointer"
                    >
                        <option value="default">Sort: Default</option>
                        <option value="rating">Sort: Rating</option>
                        <option value="pages">Sort: Pages</option>
                        <option value="year">Sort: Year</option>
                    </select>

                </div>

                {sortedList.length === 0 ? (
                    <EmptyState tab={activeTab} />
                ) : (
                    <div className="space-y-4">
                        {sortedList.map((book) => (
                            <BookCard
                                key={book.bookId}
                                book={book}
                                isWishlist={activeTab === "wishlist"}
                                onRemove={() => handleRemove(book.bookId)}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};


const PillTab = ({ label, count, active, activeColor, onClick }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors
            ${active
                ? `${activeColor} text-white`
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }`}
    >
        {label}
        <span className={`text-xs px-2 py-0.5 rounded-full ${active ? "bg-white/20" : "bg-slate-700"}`}>
            {count}
        </span>
    </button>
);

const BookCard = ({ book, isWishlist, onRemove }) => {

    const tagStyle = isWishlist
        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
        : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";

    return (
        <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 flex gap-5 items-start transition-colors">

            <Link to={`/bookDetails/${book.bookId}`}>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-20 h-28 rounded-xl object-cover shrink-0 hover:opacity-80 transition-opacity"
                />
            </Link>

            <div className="flex-1 min-w-0 space-y-2">

                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    {book.category}
                </p>

                <Link to={`/bookDetails/${book.bookId}`}>
                    <h2 className="text-xl font-bold leading-snug hover:text-cyan-400 transition-colors">
                        {book.bookName}
                    </h2>
                </Link>

                <p className="text-slate-400 text-sm">By {book.author}</p>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                    <StarRating rating={book.rating} />
                    <span>{book.rating} · {book.totalPages} pages · {book.yearOfPublishing}</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                    {book.tags?.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-3 py-0.5 rounded-full border text-xs ${tagStyle}`}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

            </div>

            <div className="flex flex-col gap-2 shrink-0">

                <Link to={`/bookDetails/${book.bookId}`}>
                    <button className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors" title="View details">
                        <ExternalLink size={16} />
                    </button>
                </Link>

                <button
                    onClick={onRemove}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                    title="Remove from list"
                >
                    <Trash2 size={16} />
                </button>

            </div>

        </div>

    );
};

const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={12}
                className={i < Math.floor(rating) ? "text-cyan-400 fill-cyan-400" : "text-slate-600"}
            />
        ))}
    </div>
);

const EmptyState = ({ tab }) => (
    <div className="text-center py-24 text-slate-600">
        <p className="text-6xl mb-5">{tab === "read" ? "📖" : "❤️"}</p>
        <p className="text-base">
            {tab === "read"
                ? "No books marked as read yet."
                : "Your wishlist is empty. Add some books!"}
        </p>
    </div>
);

export default ListedBooks;