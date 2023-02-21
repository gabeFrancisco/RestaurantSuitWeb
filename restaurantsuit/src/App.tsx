import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import UserPage from "./pages/User/UserPage";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import loginService from "./services/loginService";
import { fetchUser } from "./store/features/authSlice";
import Header from "./components/Header/Header";

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
          </Route>
          <Route path="*" element={<h1>Página não encontrada :(</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
