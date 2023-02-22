import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { Category } from "../../models/interfaces/Category";

const initialState: Category = {
    id: 0,
    name: "",
    color: "#ffffff",
    workGroupId: -1,
    createdAt: "",
    updatedAt: ""
}

export const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export default CategorySlice.reducer;
export const { } = CategorySlice.actions;