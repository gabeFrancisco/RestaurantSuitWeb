import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { User } from "../../models/interfaces/User";
import loginService from "../../services/loginService";
import axios from "axios";

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
      .post(`http://10.0.10.250:5001/api/users/login`, data)
      .then((res) => res.data)) as AuthState;

    loginService.loginUser(JSON.stringify(response.token));
    apiService.defaults.headers.common["Authorization"] = `Bearer ${loginService.getToken()}`
    return response;
  }
);

export const fetchUser = createAsyncThunk("auth/user/fetch", async () => {
  const token = loginService.checkAuth();
  if (!token) {
    throw "No token has been registered on storage!";
  } else {
    const response = await apiService.get(`/users`).then((res) => res.data);
    return response;
  }
});

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
      state.token = loginService.getToken() || "{}";
      state.message = `Session of the user ${state.user.username} was restored!`;
      state.isLogged = true;
    });

    builder.addCase(fetchUser.rejected, (state, actionm) => {
      state.message = "An error has occurred while reading the user data!";
    });
  },
});

export default AuthSlice.reducer;
export const {} = AuthSlice.actions;
