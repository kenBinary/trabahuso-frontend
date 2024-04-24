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
    "https://trabahuso-api.onrender.com/api/tech-stack?category=programming_languages&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllProgrammingLanguage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchProgrammingLanguages(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=programming_languages&order=desc"
      );
    } else {
      fetchProgrammingLanguages(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=programming_languages&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: dbLoading, isError: dbError, data: dbData },
    fetchDatabases,
  ] = useFetchOnMount<TechStackData>(
    "https://trabahuso-api.onrender.com/api/tech-stack?category=databases&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllDatabases(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchDatabases(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=databases&order=desc"
      );
    } else {
      fetchDatabases(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=databases&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: flLoading, isError: flError, data: flData },
    fetchFrameAndLib,
  ] = useFetchOnMount<TechStackData>(
    "https://trabahuso-api.onrender.com/api/tech-stack?category=frameworks_and_libraries&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllFrameAndLibs(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchFrameAndLib(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=frameworks_and_libraries&order=desc"
      );
    } else {
      fetchFrameAndLib(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=frameworks_and_libraries&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: clpLoading, isError: clpError, data: clpData },
    fetchCloudPlat,
  ] = useFetchOnMount<TechStackData>(
    "https://trabahuso-api.onrender.com/api/tech-stack?category=cloud_platforms&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllCloudPlat(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchCloudPlat(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=cloud_platforms&order=desc"
      );
    } else {
      fetchCloudPlat(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=cloud_platforms&order=desc&limit=10"
      );
    }
  }

  const [
    { isLoading: tlsLoading, isError: tlsError, data: tlsData },
    fetchTools,
  ] = useFetchOnMount<TechStackData>(
    "https://trabahuso-api.onrender.com/api/tech-stack?category=tools&order=desc&limit=10",
    {
      data: [],
      limitCount: 0,
      totalCount: 0,
    }
  );

  function showAllTools(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      fetchTools(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=tools&order=desc"
      );
    } else {
      fetchTools(
        "https://trabahuso-api.onrender.com/api/tech-stack?category=tools&order=desc&limit=10"
      );
    }
  }

  return (
    <Flex
      flexDirection="column"
      px={{ base: 2, sm: 8, md: 24, xl: 56 }}
      gap="4"
    >
      <Heading>Technologies</Heading>

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Programming Languages
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-programming-languages" mb="0">
            Show Complete programming languages
          </FormLabel>
          <Switch
            id="show-programming-languages"
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

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Databases
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-databases" mb="0">
            Show Complete databases
          </FormLabel>
          <Switch
            id="show-databases"
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

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Frameworks and Libraries
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-frmwkrs-libs" mb="0">
            Show Complete frameworks & libraries
          </FormLabel>
          <Switch
            id="show-frmwkrs-libs"
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

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Cloud Platforms
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-cloud-platforms" mb="0">
            Show Complete cloud platforms
          </FormLabel>
          <Switch
            id="show-cloud-platforms"
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

      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row", xl: "row" }}
        gap="5"
      >
        <Heading as="h4" size="md" flexGrow="1" flexShrink="0">
          Tools
        </Heading>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="show-tools" mb="0">
            Show Complete tools
          </FormLabel>
          <Switch id="show-tools" colorScheme="cyan" onChange={showAllTools} />
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
