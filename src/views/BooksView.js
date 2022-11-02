import { useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import slugify from "slugify";
// import * as bookShelfAPI from '../services/bookshelf-api';
import { useSelector, useDispatch } from "react-redux";

import { booksOperations, booksSelectors } from "components/redux/books";
import PageHeading from "components/PageHeading/PageHeading";

const makeSlug = (string) => slugify(string, { lower: true });

export default function BooksView() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const books = useSelector(booksSelectors.getBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${url}/${makeSlug(`${book.title} ${book.id}`)}`,
                  state: {
                    from: {
                      location,
                      label: "Назад к всем книгами",
                    },
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
