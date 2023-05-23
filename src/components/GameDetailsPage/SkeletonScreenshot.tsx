import { Card, Skeleton } from "@chakra-ui/react";

const SkeletonScreenshot = () => {
  return (
    <Card>
      <Skeleton height={{ base: "55vw", lg: "25vw" }} />
    </Card>
  );
};

export default SkeletonScreenshot;
