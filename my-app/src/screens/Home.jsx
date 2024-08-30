import { Box, Heading } from "@chakra-ui/react";

import CustomForm from "../components/Form";
import React from "react";
import UserButton from "../components/UserButton";

function Home() {
  return (
    <Box p={4} bg="gray.200">
      <Heading>Home Page</Heading>
      <p>Welcome to the Home page!</p>
      <CustomForm />
      <UserButton />
    </Box>
  );
}

export default Home;
