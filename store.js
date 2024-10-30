import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features_todos/todosSlice';
export const store = configureStore({
  reducer: {
    todos: todoSlice
  },
})