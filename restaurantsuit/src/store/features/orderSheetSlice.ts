import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../services/apiService";
import { OrderSheet } from "../../models/interfaces/OrderSheet";

interface OrderSheetState {
  orderSheet: OrderSheet;
  orderSheetList: Array<OrderSheet>;
}

const initialState: OrderSheetState = {
  orderSheet: {
    id: -1,
    tableId: -1,
    customerId: -1,
    createdAt: "",
    updatedAt: "",
    productOrders: [],
  },
  orderSheetList: new Array<OrderSheet>(),
};

export const fetchAllOrderSheets = createAsyncThunk(
  "orderSheets/fetchAll",
  async () => {
    const response = await apiService.get("/orders").then((res) => res.data);
    return response;
  }
);

export const OrderSheetSlice = createSlice({
  name: "OrderSheets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrderSheets.fulfilled, (state, action) => {
      state.orderSheetList = action.payload;
    });
  },
});

export default OrderSheetSlice.reducer;
export const {} = OrderSheetSlice.actions;
