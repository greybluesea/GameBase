import { Badge, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description_raw?: string;
  description?: string;
  maxLength?: number;
}

const RetractableText = ({
  description_raw = "",
  description = "",
  maxLength = 400,
}: Props) => {
  if (!description_raw && description)
    return <div dangerouslySetInnerHTML={{ __html: description }} />;
  if (description_raw && !description) description = description_raw;
  if (!description_raw && !description) return null;

  const [isExpanded, seExpansionStatus] = useState(false);

  const toggleExpansionStatus = () => {
    seExpansionStatus(!isExpanded);
  };

  if (description_raw.length <= maxLength)
    return (
      <Text display={"inline"} fontSize="md">
        {description_raw}
      </Text>
    );

  const retractedText = description_raw.slice(0, maxLength);

  return (
    <>
      {!isExpanded ? (
        <>
          <Text display={"inline"} fontSize="md">
            {retractedText}
          </Text>
          <span style={{ marginLeft: "-2px" }}>...</span>
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </>
      )}
      <Button
        colorScheme="purple"
        size={"xs"}
        marginStart={1}
        marginBottom={1}
        /* variant="outline" */
        onClick={toggleExpansionStatus}
      >
        {!isExpanded ? "Read More" : "Show Less"}
      </Button>
    </>
  );
};

export default RetractableText;
