import useQueryGameStore from "./store";
import { Button } from "@chakra-ui/react";

const ResetBtn = () => {
  const resetAllFilters = useQueryGameStore((state) => state.resetAllFilters);
  return (
    <Button
      onClick={() => {
        /*setQueryGame({} as QueryGame);*/
        resetAllFilters();
        const resetBtn = document.getElementById("resetBtn");
        if (resetBtn) resetBtn.click();
      }}
    >
      Reset all filters
    </Button>
  );
};

export default ResetBtn;
