import { HStack, Heading, Link as ChakraLink } from "@chakra-ui/react";
export default function NavBar() {
  return (
    <HStack justify="space-evenly" py="2" outline="1px solid black">
      <Heading as="h3" size="lg">
        Trabahuso
      </Heading>

      <HStack>
        <ChakraLink>Insights</ChakraLink>
        <ChakraLink>Methodology</ChakraLink>
      </HStack>
    </HStack>
  );
}
