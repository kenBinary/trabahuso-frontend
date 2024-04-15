import { Flex, Heading, Text } from "@chakra-ui/react";
export default function Introduction() {
  return (
    <Flex
      direction="column"
      gap="4"
      px={{ base: 2, sm: 8, md: 24, xl: 56 }}
      paddingTop="10"
      justify="center"
    >
      <Heading as="h2" size="3xl">
        Explore Tech Job Insights
      </Heading>
      <Text color="brand.text-200" fontSize="2xl">
        Data visualizations of scraped software developer jobs providing
        insights to the software developer job market, salaries, and in-demand
        tech skills in the philippines.
      </Text>
    </Flex>
  );
}
