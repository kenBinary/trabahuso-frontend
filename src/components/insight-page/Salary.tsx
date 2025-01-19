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
import { setBarChartHeight } from "../../util/elementHeightUtil";
import { useQuery } from "@tanstack/react-query";

interface SalaryDistribution {
  range: string;
  count: number;
}

async function fetchSalaryDistribution(): Promise<Array<SalaryDistribution>> {
  const salaryDistributionUrl = import.meta.env
    .VITE_SALARY_DISTRIBUTION_ENDPOINT;

  const response = await fetch(salaryDistributionUrl);
  return response.json();
}

export default function Salary() {
  const { isPending, error, data } = useQuery({
    queryKey: ["salaryDistribution"],
    queryFn: fetchSalaryDistribution,
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
        height={data ? setBarChartHeight(data.length) : setBarChartHeight()}
        justifyContent="center"
        alignItems="center"
      >
        {isPending ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : error ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={data} barDataKey="count"></SimpleBarChart>
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
