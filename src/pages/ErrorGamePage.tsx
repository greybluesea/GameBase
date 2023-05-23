import { Box, Heading, Text } from "@chakra-ui/react";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

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
      <Link to="/">Back to homepage</Link>
    </Box>
  );
};

export default ErrorPage;
