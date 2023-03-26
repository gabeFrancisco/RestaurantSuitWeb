import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../models/interfaces/Product";
import apiService from "../../services/apiService";

interface ProductState {
  product: Product;
  productList: Array<Product>;
}

const initialState: ProductState = {
  product: {
    id: -1,
    name: "",
    categoryId: -1,
		categoryName: "",
    quantity: 0,
    price: 0.0,
    createdAt: "",
    updatedAt: "",
  },
  productList: new Array<Product>(),
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await apiService.get("/products").then((res) => res.data);

    return response;
  }
);

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
export const {} = ProductsSlice.actions;
