import { Heading, VStack, Box } from "@chakra-ui/react";
import { SimpleBarChart, testData } from "../charts";

export default function Location() {
  return (
    <VStack px="56" align="start" py="4" gap="2">
      <Heading>Location</Heading>

      <Heading as="h4" size="md">
        Job frequency by province
      </Heading>

      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>
    </VStack>
  );
}
