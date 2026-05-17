import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import ListedBooks from "../pages/ListedBooks/ListedBooks.jsx";
import BookDetails from "../pages/BookDetails/BookDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },

      {
        path: "listedBooks",
        Component: ListedBooks,
        loader: () => fetch('/booksData.json'),
      },

      {
        path: "bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);