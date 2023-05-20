import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const pageError = useRouteError();

  return (
    <Box margin={5}>
      <Heading>Oops...</Heading>
      <Text>
        {isRouteErrorResponse(pageError)
          ? "This game does not exit. Please check the search parameters."
          : " Unexpected Error!"}
      </Text>
    </Box>
  );
};

export default ErrorPage;
