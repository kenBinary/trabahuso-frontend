import { HStack, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
export default function NavBar() {
  return (
    <HStack justify="space-evenly" py="2" bgColor="brand.primary">
      <Heading as="h3" size="lg">
        Trabahuso
      </Heading>

      <HStack>
        <ChakraLink as={ReactRouterLink} to="/" p="1" borderRadius="md">
          Insights
        </ChakraLink>
        <ChakraLink as={ReactRouterLink} to="/methodology" p="1">
          Methodology
        </ChakraLink>
      </HStack>
    </HStack>
  );
}
