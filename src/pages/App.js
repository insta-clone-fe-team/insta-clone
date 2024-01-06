import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import useAuthStore from "../redux/store/authStore";
import Profile from "./Profile";

function App() {
  const authUser = useAuthStore((state) => state.user);
  console.log("authuser", authUser);
  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to="/auth" />}
        // element={<Home />}
      ></Route>
      <Route
        path="/auth"
        element={!authUser ? <Auth /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/profile"
        element={authUser ? <Profile /> : <Navigate to="/auth" />}
      ></Route>
    </Routes>
  );
}

export default App;
