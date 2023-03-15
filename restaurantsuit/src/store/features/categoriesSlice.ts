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
      .get('/categories')
      .then(res => res.data);

    return response;
  }
);

export const addCategory = createAsyncThunk(
  "category/add",
  async (data: {}, thunk) => {
    const response = await apiService
      .post('/categories', data)
      .then(res => {
        if(res.status === 200){
          thunk.dispatch(fetchAllCategories())
          return res.data
        }
      }) as Category;

    return response;
  }
)

export const removeCategory = createAsyncThunk(
  "category/remove",
  async (data: number, thunk) => {
    const response = await apiService
      .delete(`/categories/${data}`)
      .then(res => {
        if(res.status === 200){
          thunk.dispatch(fetchAllCategories())
        }
      })

      return response
  }
)

export const CategoriesSlice = createSlice({
  name: "Category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categoryList = action.payload;
    });
    // builder.addCase(addCategory.fulfilled, (state, action) => {
    //   state
    // })
  },
});

export default CategoriesSlice.reducer;
export const {} = CategoriesSlice.actions;
