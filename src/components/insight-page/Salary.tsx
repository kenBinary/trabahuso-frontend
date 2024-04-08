import { Box, Heading, VStack, Text, Badge } from "@chakra-ui/react";

export default function Salary() {
  return (
    <VStack align="start" px="56" py="4" outline="1px solid black">
      <Heading>Salary</Heading>
      <Box w="full" border="1px solid black" height="xl">
        histogram
      </Box>

      <Heading as="h4" size="md">
        undisclosed salaries
      </Heading>
      <Box>
        <Badge colorScheme="green" variant="solid" letterSpacing="md">
          NOTE
        </Badge>
        <Text>Not all job listings specified a salary.</Text>
      </Box>
    </VStack>
  );
}
