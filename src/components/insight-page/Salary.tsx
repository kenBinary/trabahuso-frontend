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
import useFetchOnMount from "../../hooks/useFetchOnMount";

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
  const { isLoading, isError, data } = useFetchOnMount<SalaryData>(url, {
    undisclosed: 0,
    disclosed: [],
  });

  return (
    <VStack align="start" px="56" py="4">
      <Heading>Salary</Heading>

      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
