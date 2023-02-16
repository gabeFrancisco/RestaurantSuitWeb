import "./App.css";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Login/HomePage";
import UserPage from "./pages/User/UserPage";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="user" element={<UserPage id={7} username="Jesus" />} />
          </Route>
          <Route path="*" element={<h1>Not found!</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
