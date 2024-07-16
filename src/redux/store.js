import { configureStore } from '@reduxjs/toolkit';
import bookmarksReducer from './slices/bookmarksSlice';

const store = configureStore({
  reducer: {
    bookmarks: bookmarksReducer,
  },
});

export default store;
