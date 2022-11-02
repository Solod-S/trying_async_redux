import { createAction } from "@reduxjs/toolkit";

//pending (ждем тру или фалс)
export const fetchBooksRequest = createAction("books/fetchBooksRequest");
//fulfiled (если промис ризолвиться с результатом)
export const fetchBooksSuccess = createAction("books/fetchBooksSuccess");
//rejected (если ошибка)
export const fetchBooksError = createAction("books/fetchBooksError");

// описываем текущую операцию, выполнено и не выполнено
