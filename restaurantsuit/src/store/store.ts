import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthSlice } from "./features/authSlice";
import { CategoriesSlice } from "./features/categoriesSlice";
import { ProductsSlice } from "./features/productsSlice";
import { TableSlice } from "./features/tablesSlice";
import { OrderSheetSlice } from "./features/orderSheetSlice";
import { ProductOrderSlice } from "./features/productOrderSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    categories: CategoriesSlice.reducer,
    products: ProductsSlice.reducer,
    tables: TableSlice.reducer,
    orderSheets: OrderSheetSlice.reducer,
    productOrders: ProductOrderSlice.reducer
  },
  devTools: true
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
