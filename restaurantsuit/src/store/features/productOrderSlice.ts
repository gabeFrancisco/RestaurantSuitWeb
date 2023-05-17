import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductOrder } from "../../models/interfaces/ProductOrder";

interface ProductOrderState {
  productOrder: ProductOrder;
  productOrderList: Array<ProductOrder>;
  productOrderFinalList: Array<ProductOrder>;
  total: number;
}

const initialState: ProductOrderState = {
  productOrder: {
    id: -1,
    orderSheetId: -1,
    productId: -1,
    quantity: 1,
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
  productOrderFinalList: new Array<ProductOrder>(),
  total: 0,
};

export const ProductOrderSlice = createSlice({
  name: "ProductOrders",
  initialState,
  reducers: {
    addProductOrderToList: (state, action: PayloadAction<ProductOrder>) => {
      const productOrder = state.productOrderList.find(
        (x) => x.product.name === action.payload.product.name
      );
      if (!productOrder) {
        state.productOrderList.push(action.payload);
      }
    },
    fillFinalList: (state) => {
      state.productOrderFinalList = state.productOrderList;
    },
    emptyFinalList: (state) => {
      state.productOrderFinalList.splice(0, state.productOrderFinalList.length);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const orderIndex = state.productOrderList.findIndex(
        (x) => x.id === action.payload.id
      );
      state.productOrderList[orderIndex].quantity = action.payload.quantity;
    },
    removeProductOrder: (state, action: PayloadAction<number>) => {
      const orderIndex = state.productOrderList.findIndex(
        (x) => x.id === action.payload
      );
      state.productOrderList.splice(orderIndex, 1);
    },
    emptyList: (state) => {
      state.productOrderList.splice(0, state.productOrderList.length);
    },
    sumAll: (state) => {
      state.total = state.productOrderList.reduce(
        (sum, p) => sum + p.product.price * p.quantity,
        0
      );
    },
  },
  extraReducers: (builder) => {},
});

export default ProductOrderSlice.reducer;
export const {
  addProductOrderToList,
  fillFinalList,
  emptyFinalList,
  changeQuantity,
  removeProductOrder,
  emptyList,
  sumAll,
} = ProductOrderSlice.actions;
