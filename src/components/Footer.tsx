import { Flex, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      flexDirection="column"
      px="56"
      py="3"
      bgColor="brand.accent"
    >
      <Link href="https://github.com/kenBinary" target="_blank">
        <Icon boxSize="8" as={FaGithub} />
      </Link>
    </Flex>
  );
}
