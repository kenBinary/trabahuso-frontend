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
import { setBarChartHeight } from "../../util/elementHeightUtil";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ChoroplethVisualization from "./ChoroplethVisualization";

interface JobLocation {
  location: string;
  count: number;
}

interface JobMedianSalary {
  location: string;
  salary: number;
}

async function fetchJobLocations(getAll: boolean): Promise<Array<JobLocation>> {
  const jobLocationUrl = import.meta.env.VITE_JOB_LOCATIONS_ENDPOINT;

  const params = new URLSearchParams({
    IsDescending: "true",
  });

  if (getAll) {
    params.append("RetrieveAll", "true");
  }

  const response = await fetch(jobLocationUrl + "?" + params.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch job locations");
  }

  return response.json();
}

async function fetchJobLocationMedianSalary(
  getAll: boolean,
): Promise<Array<JobMedianSalary>> {
  const jobLocationUrl = import.meta.env
    .VITE_JOB_LOCATIONS_MEDIAN_SALARY_ENDPOINT;

  const params = new URLSearchParams({
    IsDescending: "true",
  });

  if (getAll) {
    params.append("RetrieveAll", "true");
  }

  const response = await fetch(jobLocationUrl + "?" + params.toString());

  if (!response.ok) {
    throw new Error("Failed to fetch job locations median salary");
  }

  return response.json();
}

export default function Location() {
  const [getAllLocation, setGetAllLocation] = useState(false);
  const [getAllSalary, setGetAllSalary] = useState(false);

  const {
    isPending: isPendingLocation,
    error: errorLocation,
    data: dataLocation,
  } = useQuery({
    queryKey: ["jobLocationData", getAllLocation],
    queryFn: () => fetchJobLocations(getAllLocation),
  });

  const {
    isPending: isPendingMedianSalary,
    error: errorMedianSalary,
    data: dataMedianSalary,
  } = useQuery({
    queryKey: ["jobLocationMedianSalary", getAllSalary],
    queryFn: () => fetchJobLocationMedianSalary(getAllSalary),
  });

  const handleGetAllLocation = () => {
    setGetAllLocation(!getAllLocation);
  };

  const handleGetAllSalary = () => {
    setGetAllSalary(!getAllSalary);
  };

  return (
    <VStack px={{ base: 2, sm: 8, md: 24, xl: 56 }} align="start" gap="4">
      <Heading>Location</Heading>

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
        width={"100%"}
        height={"600px"}
        align="center"
        justify="center"
      >
        {isPendingLocation ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorLocation ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <ChoroplethVisualization
            width="100%"
            height="100%"
            data={dataLocation}
          ></ChoroplethVisualization>
        )}
      </Flex>

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
            Show Complete Data
          </FormLabel>
          <Switch
            id="complete-job-frequency"
            colorScheme="cyan"
            onChange={handleGetAllLocation}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataLocation
            ? setBarChartHeight(dataLocation.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingLocation ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorLocation ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataLocation}
            barDataKey="count"
          ></SimpleBarChart>
        )}
      </Flex>

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Median Salary by location
        </Heading>
        <FormControl
          display="flex"
          alignItems="center"
          flexGrow="1"
          flexShrink="0"
        >
          <FormLabel htmlFor="complete-job-salary" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch
            id="complete-job-salary"
            colorScheme="cyan"
            onChange={handleGetAllSalary}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataMedianSalary
            ? setBarChartHeight(dataMedianSalary.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingMedianSalary ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorMedianSalary ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataMedianSalary}
            barDataKey="salary"
          ></SimpleBarChart>
        )}
      </Flex>
    </VStack>
  );
}
