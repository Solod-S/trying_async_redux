// import * as booksActions from "./booksActions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bookShelfApi from "../../../services/bookshelf-api";

// export const fetchBooks = () => async (dispatch) => {
//   dispatch(booksActions.fetchBooksRequest());
//   try {
//     const books = await bookShelfApi.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (_, { rejectWithValue }) => {
    // rejectWithValue ловит ошибку
    try {
      const response = await bookShelfApi.fetchBooks();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
