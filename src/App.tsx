import InsightPage from "./pages/InsightPage";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box bgColor="brand.bg" color="brand.text">
      <InsightPage></InsightPage>
      <Footer></Footer>
    </Box>
  );
}

export default App;
