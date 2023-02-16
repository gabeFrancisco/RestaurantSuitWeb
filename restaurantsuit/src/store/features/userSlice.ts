const BASE_URL = "https://localhost:5001/api";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../models/interfaces/User";
import { LoginService } from "../../services/loginService";

interface UserState {
  user: User;
  message: string;
}

const userToken = localStorage.getItem("user_token")
  ? localStorage.getItem("user_token")
  : "";

const initialState: UserState = {
  user: {
    id: 0,
    username: "",
    token: "",
    name: "string;",
    email: "string;",
    role: 0,
    lastUserWorkGroup: 0,
    createdAt: "string;",
    updatedAt: "string;",
  },
  message: "",
};

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async (data: {}, thunkAPI) => {
    const response = await axios
      .post(`${BASE_URL}/users/login`, data)
      .then((res) => res.data);

    LoginService.loginUser(response.token, JSON.stringify(response.user.id));

    return response;
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    // setUser: (state, action: PayloadAction<{ user: User }>) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.user.token = action.payload.token;
      state.message = action.payload.message;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.message = "Username or password are incorrect!";
    });
  },
});

export default UserSlice.reducer;
export const {} = UserSlice.actions;
