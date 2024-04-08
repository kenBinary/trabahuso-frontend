import { Flex, Heading, Image, VStack, Text, Box } from "@chakra-ui/react";

export default function Location() {
  return (
    <VStack px="56" align="start" py="4" outline="1px solid black">
      <Heading>Location</Heading>
      <Heading as="h4" size="md">
        Location with the most jobs
      </Heading>
      <Flex w="full" justify="center" align="center" gap="4">
        <Image
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
          w="xs"
          objectFit="cover"
        />

        <Text width="70ch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          quibusdam culpa enim repudiandae optio totam unde animi, dicta sunt ab
          molestias consequuntur cum vel facilis distinctio officiis, ut minima
          officia.
        </Text>
      </Flex>

      <Heading as="h4" size="md">
        Job frequency by province
      </Heading>
      <Box w="full" border="1px solid black" height="xl"></Box>
    </VStack>
  );
}
