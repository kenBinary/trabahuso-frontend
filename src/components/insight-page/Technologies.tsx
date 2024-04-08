import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Technologies() {
  return (
    <Flex
      flexDirection="column"
      px="56"
      py="4"
      outline="1px solid black"
      gap="2"
    >
      <Heading>Technologies</Heading>
      <Heading as="h4" size="md">
        Programming Languages
      </Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>
      <Heading as="h4" size="md">
        Databases
      </Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>
      <Heading as="h4" size="md">
        Frameworks and libraries
      </Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>
      <Heading as="h4" size="md">
        cloud platforms
      </Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>
      <Heading as="h4" size="md">
        tools
      </Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>
    </Flex>
  );
}
