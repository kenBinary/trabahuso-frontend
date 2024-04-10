import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { SimpleBarChart } from "../charts";
import useFetchOnMount from "../../hooks/useFetchOnMount";

interface Tech {
  tech_type: string;
  count: number;
}
export default function Technologies() {
  const {
    isLoading: plLoading,
    isError: plError,
    data: plData,
  } = useFetchOnMount<Array<Tech>>(
    "http://localhost:3000/api/tech-stack?category=programming_languages",
    []
  );

  const {
    isLoading: dbLoading,
    isError: dbError,
    data: dbData,
  } = useFetchOnMount<Array<Tech>>(
    "http://localhost:3000/api/tech-stack?category=databases",
    []
  );

  const {
    isLoading: flLoading,
    isError: flError,
    data: flData,
  } = useFetchOnMount<Array<Tech>>(
    "http://localhost:3000/api/tech-stack?category=frameworks_and_libraries",
    []
  );

  const {
    isLoading: clpLoading,
    isError: clpError,
    data: clpData,
  } = useFetchOnMount<Array<Tech>>(
    "http://localhost:3000/api/tech-stack?category=cloud_platforms",
    []
  );

  const {
    isLoading: tlsLoading,
    isError: tlsError,
    data: tlsData,
  } = useFetchOnMount<Array<Tech>>(
    "http://localhost:3000/api/tech-stack?category=tools",
    []
  );

  return (
    <Flex flexDirection="column" px="56" py="4" gap="4">
      <Heading>Technologies</Heading>

      <Heading as="h4" size="md">
        Programming Languages
      </Heading>
      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
          <SimpleBarChart data={plData}></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        Databases
      </Heading>
      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
          <SimpleBarChart data={dbData}></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        Frameworks and libraries
      </Heading>
      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
          <SimpleBarChart data={flData}></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        cloud platforms
      </Heading>
      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
          <SimpleBarChart data={clpData}></SimpleBarChart>
        )}
      </Flex>

      <Heading as="h4" size="md">
        tools
      </Heading>
      <Flex w="full" height="xl" justifyContent="center" alignItems="center">
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
          <SimpleBarChart data={tlsData}></SimpleBarChart>
        )}
      </Flex>
    </Flex>
  );
}
