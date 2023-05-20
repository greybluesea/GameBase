import { Badge, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children?: string;
  maxLength?: number;
}

const RetractableText = ({ children, maxLength = 400 }: Props) => {
  if (!children) return null;

  const [isRetracted, setRetractionStatus] = useState(true);

  const toggleRetractionStatus = () => {
    setRetractionStatus(!isRetracted);
  };

  const retractedText = children.slice(0, maxLength);
  const displayText = isRetracted ? retractedText : children;

  return (
    <>
      <Text display={"inline"}>{displayText}</Text>
      {children.length > maxLength && (
        <>
          {isRetracted && <span>...</span>}
          <Button
            display={"inline"}
            as={Badge}
            size={"xs"}
            variant={"subtle"}
            onClick={toggleRetractionStatus}
            marginStart={1}
          >
            {isRetracted ? "Read More" : "Show Less"}
          </Button>
        </>
      )}
    </>
  );
};

export default RetractableText;
