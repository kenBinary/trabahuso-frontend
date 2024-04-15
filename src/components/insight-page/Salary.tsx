import {
  Box,
  Heading,
  VStack,
  Text,
  Badge,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import useFetchOnMount from "../../hooks/useFetch";
import { setBarChartHeight } from "../../util/elementHeightUtil";

interface SalaryRange {
  range: string;
  count: number;
}
interface SalaryData {
  undisclosed: number;
  disclosed: Array<SalaryRange>;
}

export default function Salary() {
  const url = "http://localhost:3000/api/job-salaries";
  const [{ isLoading, isError, data }] = useFetchOnMount<SalaryData>(url, {
    undisclosed: 0,
    disclosed: [],
  });

  return (
    <VStack align="start" px={{ base: 2, sm: 8, md: 24, xl: 56 }} gap="4">
      <Heading>Salary</Heading>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="1">
          Salary Range Distribution for software developer jobs
        </Heading>
      </Flex>

      <Flex
        w="full"
        height={setBarChartHeight(data.disclosed.length)}
        justifyContent="center"
        alignItems="center"
      >
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : isError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={data.disclosed}></SimpleBarChart>
        )}
      </Flex>

      <Box>
        <Badge colorScheme="green" variant="solid" letterSpacing="md">
          NOTE
        </Badge>
        <Text>Not all job listings specified a salary.</Text>
      </Box>
    </VStack>
  );
}
