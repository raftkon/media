import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  const response = await axios.delete(`http://localhost:3005/users/${id}`);
  return id;
});
