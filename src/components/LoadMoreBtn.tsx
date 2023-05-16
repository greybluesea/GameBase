import { Button, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const LoadMoreBtn = ({ isFetchingNextPage, fetchNextPage }: Props) => {
  return (
    <HStack
      marginTop={"3"}
      marginBottom={"5"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
        {/*  {isFetchingNextPage ? <Spinner /> : "Load More"} */} Load More
      </Button>
    </HStack>
  );
};

export default LoadMoreBtn;
