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

function formatSalaryRange(salaryRange: string): string {
  try {
    const [minSalary, maxSalary] = salaryRange.split("-");

    const minValue = parseInt(minSalary, 10);
    const maxValue = parseInt(maxSalary, 10);

    if (isNaN(minValue) || isNaN(maxValue)) {
      throw new Error("Invalid salary range format");
    }

    const formattedMin = minValue.toLocaleString("en-US");
    const formattedMax = maxValue.toLocaleString("en-US");

    return `₱${formattedMin}-₱${formattedMax}`;
  } catch (error) {
    console.error("Error formatting salary range:", error);
    return salaryRange;
  }
}

async function fetchSalaryDistribution(): Promise<Array<SalaryDistribution>> {
  const salaryDistributionUrl = import.meta.env
    .VITE_SALARY_DISTRIBUTION_ENDPOINT;

  const response = await fetch(salaryDistributionUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch salary distribution");
  }

  let data: SalaryDistribution[] = await response.json();

  data = data.map((item) => {
    return { ...item, range: formatSalaryRange(item.range) };
  });

  return data;
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
