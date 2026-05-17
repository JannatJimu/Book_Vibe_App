import React from 'react';

const ErrorPage = () => {
    return (
        <div className="relative min-h-screen bg-[#0a1a14] flex flex-col items-center justify-center overflow-hidden px-6 py-16 font-mono">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,196,154,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,154,0.07) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div
                className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #00c49a22 0%, transparent 70%)' }}
            />
            <div
                className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, #00e5ff1a 0%, transparent 70%)' }}
            />

            <span className="text-[11px] tracking-[0.2em] uppercase text-cyan-300 bg-cyan-900/20 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-6">
                error // route not found
            </span>

            <h1
                className="font-extrabold leading-none tracking-tighter select-none mb-2 animate-pulse"
                style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 'clamp(90px, 18vw, 140px)',
                    background: 'linear-gradient(135deg, #00e5ff 0%, #00c49a 50%, #2dff9a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                404
            </h1>

            <div
                className="w-14 h-0.5 rounded-full my-4"
                style={{ background: 'linear-gradient(90deg, #00c49a, #00e5ff)' }}
            />

            <h2 className="font-bold text-xl text-emerald-50 tracking-wide text-center mb-3">
                Page not found
            </h2>

            <p className="text-xs text-emerald-700 text-center leading-relaxed max-w-xs mb-8">
                The page you're looking for doesn't exist
                <br />
                or has been moved to another location.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
                <button
                    onClick={() => window.location.href = '/'}
                    className="text-xs font-bold text-[#0a1a14] px-6 py-2.5 rounded-md tracking-wide transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_#00c49a44]"
                    style={{ background: 'linear-gradient(135deg, #00c49a, #00e5ff)' }}
                >
                    ↩ Go home
                </button>
                <button
                    onClick={() => window.history.back()}
                    className="text-xs font-bold text-cyan-400 px-6 py-2.5 rounded-md tracking-wide border border-cyan-500/30 bg-transparent hover:bg-cyan-900/20 hover:border-cyan-400/60 transition-all duration-150"
                >
                    ← Go back
                </button>
            </div>

            <div className="absolute bottom-5 text-[10px] text-emerald-900 tracking-widest select-none flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                sys :: 404 — path unresolved
            </div>
        </div>
    );
};

export default ErrorPage;