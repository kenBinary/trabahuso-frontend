import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InsightPage from "./pages/InsightPage";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<InsightPage></InsightPage>}></Route>
        <Route path="/methodology" element={<div>methodology</div>}></Route>
      </Routes>
    </>
  );
}

export default App;
