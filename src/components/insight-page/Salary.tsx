import { Box, Heading, VStack, Text, Badge } from "@chakra-ui/react";
import { SimpleBarChart, testData } from "../charts";

export default function Salary() {
  return (
    <VStack align="start" px="56" py="4">
      <Heading>Salary</Heading>
      <Box w="full" height="xl">
        <SimpleBarChart data={testData}></SimpleBarChart>
      </Box>

      <Box>
        <Badge colorScheme="green" variant="solid" letterSpacing="md">
          NOTE
        </Badge>
        <Text>Not all job listings specified a salary.</Text>
      </Box>
    </VStack>
  );
}
