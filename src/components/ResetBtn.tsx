import useQueryGameStore from "../store/store";
import { Button } from "@chakra-ui/react";
import clearSearchInput from "../utilities/clearSearchInput";

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
