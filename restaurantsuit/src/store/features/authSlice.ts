const BASE_URL = "https://localhost:5001/api";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../models/interfaces/User";
import loginService from "../../services/loginService";

interface AuthState {
  user: User;
  isLogged: boolean;
  message: string;
  token: string;
}

const initialState: AuthState = {
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
  isLogged: false,
  message: "",
  token: "",
};

export const fetchLogin = createAsyncThunk(
  "auth/login/fetch",
  async (data: {}, thunkAPI) => {
    const response = (await axios
      .post(`${BASE_URL}/users/login`, data)
      .then((res) => res.data)) as AuthState; 
    loginService.loginUser(JSON.stringify(response.token))
    return response;
  }
);

export const fetchUser = createAsyncThunk(
  "auth/user/fetch",
  async () => {
    const token = loginService.getToken()
    if(!token){
      throw "No token has been registered on storage!"
    }
    else{
      const response = (await axios
        .get(`${BASE_URL}/users`, {
          headers: { Authorization: `Bearer ${loginService.getToken()}`}
        })
        .then((res) => res.data))
      return response;
    }
  }
)

export const AuthSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.isLogged = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.message = "Username or password are incorrect!";
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.token = loginService.getToken() || '{}'
      state.message = `Session of the user ${state.user.username} was restored!`
      state.isLogged = true
    })

    builder.addCase(fetchUser.rejected, (state, action) =>{
      state.message = "An error has occurred while reading the user data!"
    })
  },
});

export default AuthSlice.reducer;
export const { } = AuthSlice.actions;
