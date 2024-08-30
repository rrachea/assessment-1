import { Box, List, ListItem, Text } from "@chakra-ui/react";

import React from "react";

function SubmittedNames({ names }) {
  return (
    <Box
      mt={8}
      p={4}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      width="100%"
      mx="auto"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Submitted Names
      </Text>
      {names.length > 0 ? (
        <List spacing={2}>
          {names.map((name, index) => (
            <ListItem
              key={index}
              bg="gray.100"
              p={2}
              borderRadius="md"
              boxShadow="sm"
            >
              {name}
            </ListItem>
          ))}
        </List>
      ) : (
        <Text color="gray.500">No names submitted yet.</Text>
      )}
    </Box>
  );
}

export default SubmittedNames;
