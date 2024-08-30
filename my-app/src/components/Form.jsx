import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import SubmittedNames from "./SubmittedNames";
import axios from "axios";
import { useState } from "react";

function CustomForm() {
  const [name, setName] = useState([]);
  const [submittedNames, setSubmittedNames] = useState([]);

  function validateName(value) {
    let error;
    const namePattern = /^[a-zA-Z\s]+$/;

    if (!value) {
      error = "Name is required";
    } else if (!namePattern.test(value)) {
      error = "Please use only alphabets in the name";
    }
    return error;
  }

  function getAuthor() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userNames = response.data.map((user) => user.name);
        if (userNames.includes(name)) {
          console.log("Author:", response.data[userNames.indexOf(name)]);
          const nameIndex = userNames.indexOf("Leanne Graham") + 1;
          axios
            .get(`https://jsonplaceholder.typicode.com/users/${nameIndex}`)
            .then((response) => {
              console.log("Author:", response.data);
            });
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the authors!", error);
      });
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.200"
    >
      <Box
        width={{ base: "90%", md: "50%", lg: "45%" }}
        p={8}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        mx={100}
      >
        <Text mb={4} fontSize="lg">
          Sample names: <br />
          Leanne Graham, Ervin Howell
        </Text>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={(values, actions) => {
            setName(values.name);
            getAuthor();
            setSubmittedNames([...submittedNames, values.name]);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {(props) => (
            <Form>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Author Name</FormLabel>
                    <Input {...field} placeholder="Enter author name" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
                width="50%"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
      <SubmittedNames names={submittedNames} />
    </Box>
  );
}

export default CustomForm;
