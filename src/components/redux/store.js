import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksReducer";
import { rootReduser } from "./books/booksReducer";
export const store = configureStore({
  reducer: {
    books: rootReduser,
  },
});
