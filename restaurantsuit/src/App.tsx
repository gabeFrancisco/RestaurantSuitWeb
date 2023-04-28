import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { fetchUser } from "./store/features/authSlice";

import LoginPage from "./pages/Login/LoginPage";
import UserPage from "./pages/User/UserPage";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";
import ProductPage from "./pages/Products/ProductPage/ProductsPage";
import NewProductPage from "./pages/Products/NewProduct/NewProductPage";
import UpdateProductPage from "./pages/Products/UpdateProduct/UpdateProductPage";
import TablesPage from "./pages/Tables/TablesPage";
import OrdersPage from "./pages/Orders/OrdersPage";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user" element={<UserPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="products" element={<ProductPage />} />
            <Route path="newProduct" element={<NewProductPage />} />
            <Route path="updateProduct" element={<UpdateProductPage/>}/>
            <Route path="tables" element={<TablesPage/>}/>
            <Route path="orders" element={<OrdersPage/>}/>
            <Route path="newOrder" element={<NewOrderPage/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
