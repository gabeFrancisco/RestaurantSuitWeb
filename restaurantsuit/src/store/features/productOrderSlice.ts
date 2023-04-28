import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { ProductOrder } from "../../models/interfaces/ProductOrder";

interface ProductOrderState {
  productOrder: ProductOrder;
  productOrderList: Array<ProductOrder>;
}

const initialState: ProductOrderState = {
  productOrder: {
    id: -1,
    orderSheetId: -1,
    productId: -1,
    quantity: 0,
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
  },
  productOrderList: new Array<ProductOrder>(),
};

export const ProductOrderSlice = createSlice({
  name: "ProductOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default ProductOrderSlice.reducer;
export const { } = ProductOrderSlice.actions;
