import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second post", content: "More!!" }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    }

  }
});

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;