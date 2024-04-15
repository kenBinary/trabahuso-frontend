import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spinner,
  Switch,
} from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import useFetchOnMount from "../../hooks/useFetch";
import { setBarChartHeight } from "../../util/elementHeightUtil";

interface Tech {
  tech_type: string;
  count: number;
}
interface TechStackData {
  data: Array<Tech>;
  limitCount: number;
  totalCount: number;
}
export default function Technologies() {
  const [
    { isLoading: plLoading, isError: plError, data: plData },
    fetchProgrammingLanguages,
  ] = useFetchOnMount<TechStackData>(
    "http://localhost:3000/api/tech-stack?category=programming_languages&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllProgrammingLanguage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchProgrammingLanguages(
        "http://localhost:3000/api/tech-stack?category=programming_languages&order=desc"
      );
    } else {
      fetchProgrammingLanguages(
        "http://localhost:3000/api/tech-stack?category=programming_languages&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: dbLoading, isError: dbError, data: dbData },
    fetchDatabases,
  ] = useFetchOnMount<TechStackData>(
    "http://localhost:3000/api/tech-stack?category=databases&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllDatabases(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchDatabases(
        "http://localhost:3000/api/tech-stack?category=databases&order=desc"
      );
    } else {
      fetchDatabases(
        "http://localhost:3000/api/tech-stack?category=databases&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: flLoading, isError: flError, data: flData },
    fetchFrameAndLib,
  ] = useFetchOnMount<TechStackData>(
    "http://localhost:3000/api/tech-stack?category=frameworks_and_libraries&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllFrameAndLibs(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchFrameAndLib(
        "http://localhost:3000/api/tech-stack?category=frameworks_and_libraries&order=desc"
      );
    } else {
      fetchFrameAndLib(
        "http://localhost:3000/api/tech-stack?category=frameworks_and_libraries&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: clpLoading, isError: clpError, data: clpData },
    fetchCloudPlat,
  ] = useFetchOnMount<TechStackData>(
    "http://localhost:3000/api/tech-stack?category=cloud_platforms&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllCloudPlat(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchCloudPlat(
        "http://localhost:3000/api/tech-stack?category=cloud_platforms&order=desc"
      );
    } else {
      fetchCloudPlat(
        "http://localhost:3000/api/tech-stack?category=cloud_platforms&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: tlsLoading, isError: tlsError, data: tlsData },
    fetchTools,
  ] = useFetchOnMount<TechStackData>(
    "http://localhost:3000/api/tech-stack?category=tools&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllTools(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchTools(
        "http://localhost:3000/api/tech-stack?category=tools&order=desc"
      );
    } else {
      fetchTools(
        "http://localhost:3000/api/tech-stack?category=tools&order=desc&limit=10"
      );
    }
  }

  return (
    <Flex flexDirection="column" px="56" py="4" gap="4">
      <Heading>Technologies</Heading>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Programming Languages
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch
            id="show-data"
            colorScheme="cyan"
            onChange={showAllProgrammingLanguage}
          />
        </FormControl>
      </Flex>
      <Flex
        w="full"
        height={setBarChartHeight(plData.data.length)}
        justifyContent="center"
        alignItems="center"
      >
        {plLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : plError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={plData.data}></SimpleBarChart>
        )}
      </Flex>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Databases
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch
            id="show-data"
            colorScheme="cyan"
            onChange={showAllDatabases}
          />
        </FormControl>
      </Flex>
      <Flex
        w="full"
        height={setBarChartHeight(dbData.data.length)}
        justifyContent="center"
        alignItems="center"
      >
        {dbLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : dbError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={dbData.data}></SimpleBarChart>
        )}
      </Flex>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Frameworks and Libraries
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch
            id="show-data"
            colorScheme="cyan"
            onChange={showAllFrameAndLibs}
          />
        </FormControl>
      </Flex>
      <Flex
        w="full"
        height={setBarChartHeight(flData.data.length)}
        justifyContent="center"
        alignItems="center"
      >
        {flLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : flError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={flData.data}></SimpleBarChart>
        )}
      </Flex>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Cloud Platforms
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch
            id="show-data"
            colorScheme="cyan"
            onChange={showAllCloudPlat}
          />
        </FormControl>
      </Flex>
      <Flex
        w="full"
        height={setBarChartHeight(clpData.data.length)}
        justifyContent="center"
        alignItems="center"
      >
        {clpLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : clpError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={clpData.data}></SimpleBarChart>
        )}
      </Flex>

      <Flex flexDirection="row" gap="5">
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Tools
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-data" mb="0">
            Show Complete Data
          </FormLabel>
          <Switch id="show-data" colorScheme="cyan" onChange={showAllTools} />
        </FormControl>
      </Flex>
      <Flex
        w="full"
        height={setBarChartHeight(tlsData.data.length)}
        justifyContent="center"
        alignItems="center"
      >
        {tlsLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : tlsError ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={tlsData.data}></SimpleBarChart>
        )}
      </Flex>
    </Flex>
  );
}
