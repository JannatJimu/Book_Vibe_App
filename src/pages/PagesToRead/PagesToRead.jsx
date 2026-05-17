import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";

const COLORS = [
    "#06b6d4", // cyan
    "#10b981", // emerald
    "#f59e0b", // amber
    "#f97316", // orange
    "#ef4444", // red
    "#8b5cf6", // violet
    "#ec4899", // pink
    "#3b82f6", // blue
    "#84cc16", // lime
];

const PagesToRead = () => {

    const allBooks = useLoaderData();
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    // Sort books by pages descending for a nicer chart
    const books = [...allBooks].sort((a, b) => b.totalPages - a.totalPages);

    const labels = books.map((b) => b.bookName);
    const pages = books.map((b) => b.totalPages);
    const total = pages.reduce((sum, p) => sum + p, 0);
    const max = Math.max(...pages);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Destroy old chart instance if it exists (prevents duplicate chart error)
        if (chartRef.current) {
            chartRef.current.destroy();
        }

        const ctx = canvasRef.current.getContext("2d");

        chartRef.current = new window.Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [{
                    label: "Pages",
                    data: pages,
                    backgroundColor: COLORS.slice(0, books.length),
                    borderColor: COLORS.slice(0, books.length),
                    borderWidth: 0,
                    borderRadius: 4,
                    borderSkipped: "bottom",
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => ` ${ctx.parsed.y} pages`,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#94a3b8",
                            font: { size: 11 },
                            maxRotation: 30,
                            autoSkip: false,
                        },
                        grid: { display: false },
                        border: { color: "#1e293b" },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: "#94a3b8",
                            font: { size: 11 },
                        },
                        grid: {
                            color: "#1e293b",
                            drawBorder: false,
                        },
                        border: { display: false },
                    },
                },
            },
        });

        return () => {
            if (chartRef.current) chartRef.current.destroy();
        };
    }, []);

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
            <div className="min-h-screen bg-slate-950 text-white">

                <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js" />

                <div className="max-w-5xl mx-auto px-6 py-10">

                    <div className="mb-8">
                        <h1 className="text-2xl font-black">Pages to Read</h1>
                        <p className="text-slate-400 text-sm mt-1">
                            A breakdown of page counts across all books in the library.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">

                        <StatCard label="Total Books" value={books.length} />
                        <StatCard label="Total Pages" value={total.toLocaleString()} />
                        <StatCard label="Longest Book" value={`${max} pg`} />
                        <StatCard
                            label="Avg Pages"
                            value={`${Math.round(total / books.length)} pg`}
                        />

                    </div>

                    {/* Chart */}
                    <div className="bg-slate-900 rounded-2xl p-6">
                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                            Pages per book
                        </p>

                        <div style={{ position: "relative", height: "340px" }}>
                            <canvas
                                ref={canvasRef}
                                role="img"
                                aria-label="Bar chart showing page counts for each book in the library"
                            />
                        </div>
                    </div>

                    <div className="mt-6 bg-slate-900 rounded-2xl p-6 space-y-4">

                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
                            Ranked by pages
                        </p>

                        {books.map((book, i) => (
                            <BookRow
                                key={book.bookId}
                                book={book}
                                color={COLORS[i % COLORS.length]}
                                max={max}
                                rank={i + 1}
                            />
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

const StatCard = ({ label, value }) => (
    <div className="bg-slate-900 rounded-xl p-4">
        <p className="text-xs text-slate-500 mb-1">{label}</p>
        <p className="text-xl font-black">{value}</p>
    </div>
);

// Book row with inline progress bar
const BookRow = ({ book, color, max, rank }) => {

    const pct = Math.round((book.totalPages / max) * 100);

    return (
        <div className="flex items-center gap-4">

            <span className="text-xs text-slate-600 w-4 shrink-0">
                {rank}
            </span>

            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm truncate pr-4">{book.bookName}</span>
                    <span className="text-xs text-slate-400 shrink-0">{book.totalPages} pg</span>
                </div>

                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                    />
                </div>
            </div>

        </div>
    );
};

export default PagesToRead;