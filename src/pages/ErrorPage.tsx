import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const pageError = useRouteError();

  return (
    <>
      {/*   <NavBar /> */}
      <Box margin={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(pageError)
            ? "This Page does not exit. Please check the address/URL."
            : " Unexpected Error!"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
