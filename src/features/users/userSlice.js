import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Praveen" },
  { id: 2, name: "Dyno" },
  { id: 3, name: "Dev" },
];

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (store) => store.users;

export default userReducer.reducer;
