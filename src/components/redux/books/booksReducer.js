import { createReducer, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import * as booksActions from "./booksActions";
import { fetchBooks } from "./booksOperations";

//
///  createAsyncThunk
// екшены создавать не нужно
const entities = createReducer([], {
  [fetchBooks.fulfilled]: (state, action) => action.payload,
  //   [booksActions.fetchBooksSuccess]: (state, action) => action.payload,
});
const isLoading = createReducer(false, {
  [fetchBooks.pending]: () => true,
  //   [booksActions.fetchBooksRequest]: () => true,
  [fetchBooks.fulfilled]: () => false,
  // [booksActions.fetchBooksSuccess]: () => false,
  [fetchBooks.rejected]: () => false,
  // [booksActions.fetchBooksError]: () => false,
});
const error = createReducer(null, {
  [fetchBooks.rejected]: (state, action) => action.payload,
  // [booksActions.fetchBooksError]: (state, action) => action.payload,
  [fetchBooks.pending]: () => null,
  // [booksActions.fetchBooksRequest]: () => null,
});

export const rootReduser = combineReducers({
  entities,
  isLoading,
  error,
});
///
/// createAsyncThunk слайс
///

const booksSlice = createSlice({
  name: "books",
  initialState: { entities: [], isLoading: false, error: null },
  reducers: {
    increment(state, action) {},
    decrement(state, action) {},
  },
  // для синхронщины
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      return { ...state, entities: action.payload };
    },
    [fetchBooks.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    },
  },
  // для асинхронщины
});
// export const rootReduser = booksSlice.reducer;
// console.log(booksSlice);
///
///
/// без createAsyncThunk
/// без createAsyncThunk
//
// const entities = createReducer([], {
//   [booksActions.fetchBooksSuccess]: (state, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [booksActions.fetchBooksRequest]: () => true,
//   [booksActions.fetchBooksSuccess]: () => false,
//   [booksActions.fetchBooksError]: () => false,
// });
// const error = createReducer(null, {
//   [booksActions.fetchBooksError]: (state, action) => action.payload,
//   [booksActions.fetchBooksRequest]: () => null,
// });

// export const rootReduser = combineReducers({
//   entities,
//   isLoading,
//   error,
// });

/// без createAsyncThunk
