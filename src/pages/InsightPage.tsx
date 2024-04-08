import { Box } from "@chakra-ui/react";
import Introduction from "../components/insight-page/Introduction";
import Overview from "../components/insight-page/Overview";
export default function InsightPage() {
  return (
    <Box as="main">
      <Introduction></Introduction>
      <Overview></Overview>
    </Box>
  );
}
