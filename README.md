<div align="center">

# 📚 Book Vibe

**A modern book library app — browse, track, and wishlist your favorite books.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Book_Vibe-06b6d4?style=for-the-badge)](https://bright-meringue-b3976d.netlify.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://endearing-cascaron-fafefb.netlify.app/)

</div>

---

## ✨ Features

- 📖 Browse all books from the library
- 🔍 View detailed info for each book
- ✅ Mark books as **Read** or 💛 add to **Wishlist**
- 🗑️ Remove books from your lists
- 🔃 Sort listed books by rating, pages, or year
- 📊 Pages to Read chart with summary stats
- 🔝 Scroll resets automatically on every page navigation
- 💾 All data persisted in `localStorage` — no backend needed

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | v19 | UI framework |
| [React Router](https://reactrouter.com/) | v7 | Client-side routing |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Styling |
| [Lucide React](https://lucide.dev/) | latest | Icons |
| [Chart.js](https://www.chartjs.org/) | v4 | Pages to Read chart |
| [Vite](https://vitejs.dev/) | v6 | Build tool |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/book-vibe.git

# 2. Move into the project
cd book-vibe

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   └── Navbar.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   └── ScrollToTop.jsx         ← resets scroll on route change
├── pages/
│   ├── Root/
│   │   └── Root.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── BookDetails/
│   │   └── BookDetails.jsx
│   ├── ListedBooks/
│   │   └── ListedBooks.jsx
│   ├── PagesToRead/
│   │   └── PagesToRead.jsx
│   └── ErrorPage/
│       └── ErrorPage.jsx
├── router/
│   └── router.jsx
└── utility/
    └── addToDB.js              ← localStorage helpers
public/
└── booksData.json              ← book data source
```

---

## 📦 Dependencies

```json
"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.0.0",
  "lucide-react": "^0.383.0"
}
```

```json
"devDependencies": {
  "vite": "^6.0.0",
  "@vitejs/plugin-react": "^4.0.0",
  "tailwindcss": "^4.0.0"
}
```

---

## 💾 localStorage Logic

Books are saved by their ID in two separate lists:

| Key | Description |
|---|---|
| `readList` | IDs of books marked as read |
| `wishList` | IDs of wishlisted books |

Three utility functions live in `src/utility/addToDB.js`:

```js
getStoredBook(key)        // read a list from localStorage
addToStoredDB(key, id)    // add a book ID to a list
removeFromStoredDB(key, id) // remove a book ID from a list
```

---

## 📄 License

MIT © 2025 JannatJimu
