import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
