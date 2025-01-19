import InsightPage from "./pages/InsightPage";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box bgColor="brand.bg" color="brand.text">
        <InsightPage></InsightPage>
        <Footer></Footer>
      </Box>
    </QueryClientProvider>
  );
}

export default App;
