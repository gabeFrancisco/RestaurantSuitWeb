import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "./store/store";
// import { useEffect } from "react";
// import { fetchUser } from "./store/features/authSlice";

import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import UserPage from "./pages/User/UserPage";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

import { fetchUser } from "./store/features/authSlice";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";

import "./App.css";
import loginService from "./services/loginService";

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
            <Route path="home" element={<HomePage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="categories" element={<CategoriesPage/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
