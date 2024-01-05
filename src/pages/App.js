import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import useAuthStore from "../redux/store/authStore";

function App() {
  const authUser = useAuthStore((state) => state.user);
  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to="/auth" />}
      ></Route>
      <Route
        path="/auth"
        element={!authUser ? <Auth /> : <Navigate to="/" />}
      ></Route>
    </Routes>
  );
}

export default App;
