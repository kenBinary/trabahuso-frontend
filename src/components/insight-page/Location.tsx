import { Heading, VStack, Spinner, Flex } from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import useFetchOnMount from "../../hooks/useFetchOnMount";

interface JobLocation {
  location: string;
  jobCount: number;
  medianSalary: number;
}

export default function Location() {
  const url = "http://localhost:3000/api/job-locations/";
  const { isLoading, isError, data } = useFetchOnMount<Array<JobLocation>>(
    url,
    []
  );

  const medianSalaryList = data.filter((job) => {
    return job.medianSalary !== null;
  });

  return (
    <VStack px="56" align="start" py="4" gap="2">
      <Heading>Location</Heading>

      <Heading as="h4" size="md">
        Job frequency by location
      </Heading>

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
          <SimpleBarChart data={data} barDataKey="jobCount"></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        Median Salary by location
      </Heading>

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
          <SimpleBarChart
            data={medianSalaryList}
            barDataKey="medianSalary"
          ></SimpleBarChart>
        )}
      </Flex>
    </VStack>
  );
}
