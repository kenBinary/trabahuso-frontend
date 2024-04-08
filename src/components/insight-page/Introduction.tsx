import { Flex, Heading, Text } from "@chakra-ui/react";
export default function Introduction() {
  return (
    <Flex
      direction="column"
      px="56"
      py="8"
      h="sm"
      justify="center"
      outline="1px solid black"
    >
      <Heading>Explore Tech Job Insights</Heading>
      <Text>
        Explore interactive data visualizations to uncover the hottest software
        developer job markets, salary trends, and in-demand tech skills. Make
        your next career move with confidence.
      </Text>
    </Flex>
  );
}
