import {
  Heading,
  VStack,
  Spinner,
  Flex,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import useFetch from "../../hooks/useFetch";
import { setBarChartHeight } from "../../util/elementHeightUtil";

interface JobLocation {
  location: string;
  "job count": number;
  "median salary": number;
}

interface JobLocations {
  data: Array<JobLocation>;
  limitCount: number;
  totalCount: number;
}

export default function Location() {
  const jobLocationUrl = import.meta.env.VITE_JOB_LOCATIONS_ENDPOINT;
  const [{ isLoading, isError, data }, doFetch] = useFetch<JobLocations>(
    jobLocationUrl,
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    },
    {
      limit: "10",
      sort: "jobCount",
      order: "desc",
    }
  );

  function handleShowData(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      doFetch(jobLocationUrl, {
        sort: "jobCount",
        order: "desc",
      });
    } else {
      doFetch(jobLocationUrl, {
        limit: "10",
        sort: "jobCount",
        order: "desc",
      });
    }
  }

  const medianSalaryList = data.data.filter((job) => {
    return job["median salary"] !== null && Number(job["median salary"]) !== 0;
  });

  return (
    <VStack px={{ base: 2, sm: 8, md: 24, xl: 56 }} align="start" gap="4">
      <Heading>Location</Heading>

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Job frequency by location
        </Heading>
        <FormControl
          display="flex"
          alignItems="center"
          flexGrow="1"
          flexShrink="0"
        >
          <FormLabel htmlFor="complete-job-frequency" mb="0">
            Show Complete job frequency
          </FormLabel>
          <Switch
            id="complete-job-frequency"
            colorScheme="cyan"
            onChange={handleShowData}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={setBarChartHeight(data.data.length)}
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
          <SimpleBarChart
            data={data.data}
            barDataKey="job count"
          ></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        Median Salary by location
      </Heading>

      <Flex
        w="full"
        height={setBarChartHeight(data.data.length)}
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
          <SimpleBarChart
            data={medianSalaryList}
            barDataKey="median salary"
          ></SimpleBarChart>
        )}
      </Flex>
    </VStack>
  );
}
