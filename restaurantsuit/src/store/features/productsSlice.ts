import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  current,
} from "@reduxjs/toolkit";
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

export const addProduct = createAsyncThunk(
  "products/add",
  async (data: {}, thunkAPI) => {
    const response = await apiService.post("/products", data).then((res) => {
      if (res.status === 200) {
        thunkAPI.dispatch(fetchAllProducts);
        return res.data;
      }
    });
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async(data: {}, thunkAPI) => {
    const response = await apiService.put("/products", data).then((res) => {
      if(res.status === 200){
        thunkAPI.dispatch(fetchAllProducts);
        return res.data
      }
    })
    return response;
  }
)

export const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<number>) => {
      state.product = current(
        state.productList.find(
          (product) => product.id === action.payload
        ) as Product
      );
      // console.log(product);
      // console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export default ProductsSlice.reducer;
export const { setProduct } = ProductsSlice.actions;
