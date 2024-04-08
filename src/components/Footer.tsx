import { Flex, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex as="footer" align="center" flexDirection="column" px="56" py="3">
      <Icon boxSize="8" as={FaGithub} />
    </Flex>
  );
}
