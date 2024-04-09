import { Box, Flex, Heading } from "@chakra-ui/react";
import { SimpleBarChart, testData } from "../charts";

export default function Technologies() {
  return (
    <Flex flexDirection="column" px="56" py="4" gap="4">
      <Heading>Technologies</Heading>
      <Heading as="h4" size="md">
        Programming Languages
      </Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
      <Heading as="h4" size="md">
        Databases
      </Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
      <Heading as="h4" size="md">
        Frameworks and libraries
      </Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
      <Heading as="h4" size="md">
        cloud platforms
      </Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
      <Heading as="h4" size="md">
        tools
      </Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
    </Flex>
  );
}
