import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/auth" element={<Auth></Auth>}></Route>
    </Routes>
  );
}

export default App;
