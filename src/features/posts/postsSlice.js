import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "It is very easy",
  },
  {
    id: 2,
    title: "Subscribe",
    content: "Like and share the video...",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: { id: nanoid(), title, content, userId },
        };
      },
    },
  },
});

export const selectAllPost = (store) => store.posts;

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
