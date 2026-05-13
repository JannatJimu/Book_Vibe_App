import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-[#164756fa] text-[#c8d6c0] font-light mt-10">
            {/* Top Newsletter Bar */}
            <div className="bg-[#226236] border-b border-[#2a3d2f] px-12 py-3.5 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs tracking-widest uppercase text-[#6baa7a] font-normal">
                    📚 Join 8,000+ readers — weekly picks in your inbox
                </span>
                <div className="flex items-center gap-2">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-[#83b499] border border-[#2a3d2f] rounded-xl text-[#c8d6c0] text-xs px-3.5 py-1.5 outline-none w-[200px] focus:border-green-400 transition-colors placeholder:text-[#4a6252]"
                    />
                    <button className="bg-[#4ba467] hover:bg-green-600 text-[#0f1a14] px-4 py-1.5 rounded-xl text-xs font-medium tracking-wider transition-all hover:-translate-y-0.5">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand Column */}
                <div>
                    <h2 className="text-2xl font-bold text-[#f0f7ec] tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        Book <span className="text-green-400">Vibe</span>
                    </h2>
                    <p className="text-[13px] text-[#6baa7a] leading-relaxed max-w-[220px] mb-6 font-light">
                        Handpicked reads that inspire, challenge, and quietly change how you see the world.
                    </p>

                    {/* Mini Bookshelf */}
                    <div className="flex items-end gap-1 mb-6 pl-0.5">
                        <div className="w-3 h-10 rounded-t bg-amber-700 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[52px] rounded-t bg-emerald-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-9 rounded-t bg-pink-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-12 rounded-t bg-blue-900 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[42px] rounded-t bg-purple-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[38px] rounded-t bg-amber-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[50px] rounded-t bg-teal-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[34px] rounded-t bg-rose-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-11 rounded-t bg-blue-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-[46px] rounded-t bg-green-800 hover:-translate-y-1 transition-transform cursor-pointer"></div>
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-[#2a3d2f] via-[#4a6252] to-[#2a3d2f] rounded-sm mb-5"></div>

                    {/* Social Links */}
                    <div className="flex gap-2.5">
                        <a
                            href=""
                            className="w-[34px] h-[34px] rounded-lg border border-[#2a3d2f] bg-[#1a2a1f] text-[#6baa7a] flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-[#0f1a14] transition-all"
                            aria-label="Twitter"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a
                            href=""
                            className="w-[34px] h-[34px] rounded-lg border border-[#2a3d2f] bg-[#1a2a1f] text-[#6baa7a] flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-[#0f1a14] transition-all"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </a>
                        <a
                            href=""
                            className="w-[34px] h-[34px] rounded-lg border border-[#2a3d2f] bg-[#1a2a1f] text-[#6baa7a] flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-[#0f1a14] transition-all"
                            aria-label="Goodreads"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                            </svg>
                        </a>
                        <a
                            href=""
                            className="w-[34px] h-[34px] rounded-lg border border-[#2a3d2f] bg-[#1a2a1f] text-[#6baa7a] flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-[#0f1a14] transition-all"
                            aria-label="Pinterest"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.05-.96-.01-2.11.22-3.15l1.56-6.6s-.39-.77-.39-1.91c0-1.79 1.04-3.13 2.33-3.13 1.1 0 1.63.82 1.63 1.81 0 1.1-.7 2.75-1.06 4.28-.3 1.27.64 2.31 1.89 2.31 2.27 0 3.8-2.92 3.8-6.37 0-2.63-1.77-4.6-4.99-4.6-3.63 0-5.87 2.71-5.87 5.74 0 1.05.31 1.79.8 2.36.22.26.25.36.17.66-.06.21-.18.73-.24.94-.08.3-.33.41-.61.3-1.72-.7-2.52-2.58-2.52-4.69 0-3.49 2.95-7.67 8.79-7.67 4.71 0 7.82 3.4 7.82 7.07 0 4.85-2.7 8.48-6.68 8.48-1.34 0-2.6-.72-3.03-1.54l-.84 3.31c-.25.98-.75 1.97-1.18 2.73A12 12 0 1 0 12 0z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Explore Links */}
                <div>
                    <p
                        className="text-[13px] font-bold text-[#f0f7ec] tracking-widest uppercase mb-4 pb-2.5 border-b border-[#2a3d2f] relative"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Explore
                        <span className="absolute left-0 bottom-[-1px] w-6 h-[1px] bg-green-400"></span>
                    </p>
                    <ul className="space-y-2.5">
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Listed Books
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Pages to Read
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                New Arrivals
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Top Picks
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Staff Favorites
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Account Links + Genres */}
                <div>
                    <p
                        className="text-[13px] font-bold text-[#f0f7ec] tracking-widest uppercase mb-4 pb-2.5 border-b border-[#2a3d2f] relative"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Account
                        <span className="absolute left-0 bottom-[-1px] w-6 h-[1px] bg-green-400"></span>
                    </p>
                    <ul className="space-y-2.5 mb-7">
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Sign In
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                My Reading List
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Reviews
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="" className="text-[13.5px] text-[#7a9e84] hover:text-green-400 hover:pl-1.5 transition-all block">
                                Help Center
                            </a>
                        </li>
                    </ul>

                    <p
                        className="text-[13px] font-bold text-[#f0f7ec] tracking-widest uppercase mb-4 pb-2.5 border-b border-[#2a3d2f] relative"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Browse
                        <span className="absolute left-0 bottom-[-1px] w-6 h-[1px] bg-green-400"></span>
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3] text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            Fiction
                        </span>
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3]  text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            Sci-Fi
                        </span>
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3]  text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            History
                        </span>
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3]  text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            Self-help
                        </span>
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3]  text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            Mystery
                        </span>
                        <span className="border border-[#2a3d2f] rounded-full text-[#b3b7b3] text-[10.5px] tracking-wider px-2.5 py-0.5 uppercase cursor-pointer hover:border-green-400 hover:text-green-400 transition-colors">
                            Poetry
                        </span>
                    </div>
                </div>

                {/* Editor's Pick */}
                <div>
                    <p
                        className="text-[13px] font-bold text-[#f0f7ec] tracking-widest uppercase mb-4 pb-2.5 border-b border-[#2a3d2f] relative"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                        Editor's Pick
                        <span className="absolute left-0 bottom-[-1px] w-6 h-[1px] bg-green-400"></span>
                    </p>

                    {/* Featured Book Card */}
                    <div className="bg-[#226236] border border-[#2a3d2f] rounded-xl p-4 flex gap-3 mb-4">
                        <div className="w-11 h-[62px] rounded bg-gradient-to-br from-[#1a4731] to-[#0d2b1e] flex-shrink-0 flex items-center justify-center text-white/70 text-[9px] font-medium text-center uppercase tracking-wide leading-tight p-1 relative overflow-hidden">
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-black/25"></span>
                            <span className="relative z-10">The Remains of the Day</span>
                        </div>
                        <div className="flex-1">
                            <p className="text-[12.5px] font-bold text-[#e8f5e0] mb-0.5 leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                                The Remains of the Day
                            </p>
                            <p className="text-[11px] text-[#4a6252] mb-1.5">Kazuo Ishiguro</p>
                            <div className="flex gap-0.5 mb-2">
                                <span className="text-amber-500 text-[11px]">★</span>
                                <span className="text-amber-500 text-[11px]">★</span>
                                <span className="text-amber-500 text-[11px]">★</span>
                                <span className="text-amber-500 text-[11px]">★</span>
                                <span className="text-amber-500 text-[11px]">★</span>
                            </div>
                            <span className="inline-block bg-green-950 text-green-400 text-[10px] font-medium tracking-wider px-2 py-0.5 rounded-full uppercase">
                                #1 this week
                            </span>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="p-3 border border-[#2a3d2f] rounded-xl bg-[#226236]">
                        <p className="text-[11px] text-[#1d231f] uppercase tracking-widest mb-1.5 font-normal">
                            Reading this week
                        </p>
                        <p className="text-xl font-bold text-green-400 mb-0.5 leading-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                            200+
                        </p>
                        <p className="text-[11.5px] text-[#262927]">readers tracking pages</p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#1a2a1f] mx-12"></div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between flex-wrap gap-3">
                <p className="text-xs text-gray-700">
                    © 2025 <span className="text-[#b3b7b3] ">Book Vibe</span>. All rights reserved.
                </p>
                <div className="flex gap-5">
                    <a href="" className="text-xs text-[#b3b7b3]  hover:text-green-400 transition-colors">
                        Privacy Policy
                    </a>
                    <a href="" className="text-xs text-[#b3b7b3]  hover:text-green-400 transition-colors">
                        Terms of Use
                    </a>
                    <a href="" className="text-xs text-[#b3b7b3]  hover:text-green-400 transition-colors">
                        Cookie Preferences
                    </a>
                    <a href="" className="text-xs text-[#b3b7b3]  hover:text-green-400 transition-colors">
                        Sitemap
                    </a>
                </div>
                <p className="text-[11px] text-[#b3b7b3]  flex items-center gap-1">
                    Made with <span className="text-green-500">♥</span> for readers
                </p>
            </div>
        </footer>
    );
};

export default Footer;