import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<div>home</div>}></Route>
        <Route path="/methodology" element={<div>methodology</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
