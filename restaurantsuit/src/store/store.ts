import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthSlice } from "./features/authSlice";
import { CategoriesSlice } from "./features/categoriesSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    categories: CategoriesSlice.reducer
  },
  devTools: true
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
