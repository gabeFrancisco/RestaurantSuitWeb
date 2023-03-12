import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { Category } from "../../models/interfaces/Category";

interface CategoryState {
  category: Category;
  categoryList: Array<Category>;
}

const initialState: CategoryState = {
  category: {
    id: 0,
    name: "",
    color: "#ffffff",
    workGroupId: -1,
    createdAt: "",
    updatedAt: "",
  },
  categoryList: new Array<Category>(),
};

export const fetchAllCategories = createAsyncThunk(
  "category/fetchAll",
  async () => {
    const response = await apiService
      .get("/categories")
      .then((res) => res.data);

    return response;
  }
);

export const CategoriesSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
  },
});

export default CategoriesSlice.reducer;
export const {} = CategoriesSlice.actions;
