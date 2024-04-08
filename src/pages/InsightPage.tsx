import { Box } from "@chakra-ui/react";
import Introduction from "../components/insight-page/Introduction";
import Overview from "../components/insight-page/Overview";
import Location from "../components/insight-page/Location";
import Salary from "../components/insight-page/Salary";

export default function InsightPage() {
  return (
    <Box as="main">
      <Introduction></Introduction>
      <Overview></Overview>
      <Location></Location>
      <Salary></Salary>
    </Box>
  );
}
