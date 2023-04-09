import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

// central export point for everything related to Redux

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
