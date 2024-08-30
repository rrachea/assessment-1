import { Box, Button } from "@chakra-ui/react";

import React from "react";
import UserList from "./UserList";
import axios from "axios";
import { useState } from "react";

function UserButton() {
  const [authorsInfo, setAuthorsInfo] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  function getAuthors() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setAuthorsInfo(response.data);
        setIsFetched(true);
      })
      .catch((error) => {
        console.error("There was an error fetching the authors!", error);
      });
  }
  return (
    <>
      <Box textAlign="center" mt={10}>
        <Button colorScheme="teal" onClick={getAuthors}>
          Get All Authors
        </Button>
        {isFetched && <UserList authors={authorsInfo} />}
      </Box>
    </>
  );
}

export default UserButton;
