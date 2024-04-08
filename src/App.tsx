import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InsightPage from "./pages/InsightPage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<InsightPage></InsightPage>}></Route>
        <Route path="/methodology" element={<div>methodology</div>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
