import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      state.items.push(action.payload);
    },
    removeBookmark: (state, action) => {
      state.items = state.items.filter(
        (bookmark) => bookmark.id !== action.payload.id
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
