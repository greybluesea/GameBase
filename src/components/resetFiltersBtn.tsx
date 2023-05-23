import { Button } from "@chakra-ui/react";
import useQueryGameStore from "../store/store";
import clearSearchInput from "../utilities/clearSearchInput";
import { Link } from "react-router-dom";

const ResetBtn = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  return (
    <Button
      id="resetFiltersBtn"
      onClick={() => {
        resetAllFilters();
        clearSearchInput();
      }}
    >
      Reset all filters
    </Button>
  );
};

export default ResetBtn;
