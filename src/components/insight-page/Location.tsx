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
import useFetchOnMount from "../../hooks/useFetch";
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
  const initialUrl =
    "https://trabahuso-api.onrender.com/api/job-locations?limit=10&sort=jobCount&order=desc";
  const [{ isLoading, isError, data }, doFetch] = useFetchOnMount<JobLocations>(
    initialUrl,
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function handleShowData(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      doFetch(
        "https://trabahuso-api.onrender.com/api/job-locations?&sort=jobCount&order=desc"
      );
    } else {
      doFetch(initialUrl);
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
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch id="show-data" colorScheme="cyan" onChange={handleShowData} />
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
