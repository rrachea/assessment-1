import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import React from "react";

function UserList({ authors }) {
  return (
    <Box mt={8} px={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {authors.map((author, index) => (
          <Card key={index} boxShadow="md">
            <CardHeader>
              <Heading size="md">{author.name}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Email
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {author.email}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Address
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {author.address.street}, {author.address.city},{" "}
                    {author.address.zipcode}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Phone
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {author.phone}
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Company
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {author.company.name}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default UserList;
