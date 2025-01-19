import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Spinner,
  Switch,
} from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import { setBarChartHeight } from "../../util/elementHeightUtil";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface TechCount {
  techType: string;
  count: number;
}

enum Category {
  ProgrammingLanguages = "programming_languages",
  Databases = "databases",
  FrameworksAndLibraries = "frameworks_and_libraries",
  CloudPlatforms = "cloud_platforms",
  Tools = "tools",
}

async function fetchTechCounts(
  getAll: boolean,
  category: Category
): Promise<Array<TechCount>> {
  const jobLocationUrl = import.meta.env.VITE_TECH_STACK_COUNTS_ENDPOINT;

  const params = new URLSearchParams({
    IsDescending: "true",
    Category: category,
  });

  if (getAll) {
    params.append("RetrieveAll", "true");
  }

  const response = await fetch(jobLocationUrl + "?" + params.toString());
  return response.json();
}

export default function Technologies() {
  const [getAllProgLang, setGetAllProgLang] = useState(false);
  const [getAllDatabases, setGetAllDatabases] = useState(false);
  const [getAllFrameworksAndLibraries, setGetAllFrameworksAndLibraries] =
    useState(false);
  const [getAllCloudPlatforms, setGetAllCloudPlatforms] = useState(false);
  const [getAllTools, setGetAllTools] = useState(false);

  const {
    isPending: isPendingProgLang,
    error: errorProgLang,
    data: dataProgLang,
  } = useQuery({
    queryKey: ["programmingLanguagesCount", getAllProgLang],
    queryFn: () =>
      fetchTechCounts(getAllProgLang, Category.ProgrammingLanguages),
  });

  const {
    isPending: isPendingDatabases,
    error: errorDatabases,
    data: dataDatabases,
  } = useQuery({
    queryKey: ["databasesCount", getAllDatabases],
    queryFn: () => fetchTechCounts(getAllDatabases, Category.Databases),
  });

  const {
    isPending: isPendingFrameworksAndLibraries,
    error: errorFrameworksAndLibraries,
    data: dataFrameworksAndLibraries,
  } = useQuery({
    queryKey: ["frameworksAndLibrariesCount", getAllFrameworksAndLibraries],
    queryFn: () =>
      fetchTechCounts(
        getAllFrameworksAndLibraries,
        Category.FrameworksAndLibraries
      ),
  });

  const {
    isPending: isPendingCloudPlatforms,
    error: errorCloudPlatforms,
    data: dataCloudPlatforms,
  } = useQuery({
    queryKey: ["cloudPlatformsCount", getAllCloudPlatforms],
    queryFn: () =>
      fetchTechCounts(getAllCloudPlatforms, Category.CloudPlatforms),
  });

  const {
    isPending: isPendingTools,
    error: errorTools,
    data: dataTools,
  } = useQuery({
    queryKey: ["toolsCount", getAllTools],
    queryFn: () => fetchTechCounts(getAllTools, Category.Tools),
  });

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
            onChange={() => setGetAllProgLang(!getAllProgLang)}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataProgLang
            ? setBarChartHeight(dataProgLang.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingProgLang ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorProgLang ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataProgLang}
            barDataKey="count"
          ></SimpleBarChart>
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
            onChange={() => setGetAllDatabases(!getAllDatabases)}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataDatabases
            ? setBarChartHeight(dataDatabases.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingDatabases ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorDatabases ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataDatabases}
            barDataKey="count"
          ></SimpleBarChart>
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
            onChange={() =>
              setGetAllFrameworksAndLibraries(!getAllFrameworksAndLibraries)
            }
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataFrameworksAndLibraries
            ? setBarChartHeight(dataFrameworksAndLibraries.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingFrameworksAndLibraries ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorFrameworksAndLibraries ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataFrameworksAndLibraries}
            barDataKey="count"
          ></SimpleBarChart>
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
            onChange={() => setGetAllCloudPlatforms(!getAllCloudPlatforms)}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataCloudPlatforms
            ? setBarChartHeight(dataCloudPlatforms.length)
            : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingCloudPlatforms ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorCloudPlatforms ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart
            data={dataCloudPlatforms}
            barDataKey="count"
          ></SimpleBarChart>
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
          <Switch
            id="show-tools"
            colorScheme="cyan"
            onChange={() => setGetAllTools(!getAllTools)}
          />
        </FormControl>
      </Flex>

      <Flex
        w="full"
        height={
          dataTools ? setBarChartHeight(dataTools.length) : setBarChartHeight()
        }
        justifyContent="center"
        alignItems="center"
      >
        {isPendingTools ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : errorTools ? (
          <Heading>Failed to retrieve data</Heading>
        ) : (
          <SimpleBarChart data={dataTools} barDataKey="count"></SimpleBarChart>
        )}
      </Flex>
    </Flex>
  );
}
