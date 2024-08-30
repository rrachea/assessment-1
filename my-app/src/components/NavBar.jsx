import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import React from "react";

const Links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"gray.100"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box fontWeight="bold">Logo</Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Link key={link.name} to={link.href}>
                <Button
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <Link key={link.name} to={link.href}>
                <Button
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.200",
                  }}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navigation;
