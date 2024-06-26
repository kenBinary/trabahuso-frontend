import { Flex, Icon, Link } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      flexDirection="column"
      px={{ base: 2, sm: 8, md: 24, xl: 56 }}
      py="2"
      bgColor="brand.accent"
    >
      <Link href="https://github.com/kenBinary/trabahuso-frontend" target="_blank">
        <Icon boxSize="8" as={FaGithub} />
      </Link>
    </Flex>
  );
}
