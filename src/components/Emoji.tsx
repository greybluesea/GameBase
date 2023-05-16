import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/GameHubResources/Emojis/meh.webp";
import thumbsUp from "../assets/GameHubResources/Emojis/thumbs-up.webp";
import bullsEye from "../assets/GameHubResources/Emojis/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMapping: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "15px" },
    4: { src: thumbsUp, alt: "thumbsUp", boxSize: "15px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "20px" },
  };

  return <Image {...emojiMapping[rating]} />;
};

export default Emoji;
