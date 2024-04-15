import { Box } from "@chakra-ui/react";
import Introduction from "../components/insight-page/Introduction";
import Overview from "../components/insight-page/Overview";
import Location from "../components/insight-page/Location";
import Salary from "../components/insight-page/Salary";
import Technologies from "../components/insight-page/Technologies";

export default function InsightPage() {
  return (
    <Box as="main" display="flex" flexDirection="column" rowGap="10">
      <Introduction></Introduction>
      <Overview></Overview>
      <Location></Location>
      <Salary></Salary>
      <Technologies></Technologies>
    </Box>
  );
}
