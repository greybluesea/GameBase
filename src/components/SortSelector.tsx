import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useQueryGameStore from "./store";

/* interface Props {
  onSelectSort: (sort: Sort) => void;
  selectedSort: Sort | null;
} */

export interface Sort {
  value: string;
  name: string;
}

const SortSelector = (/* { onSelectSort, selectedSort }: Props */) => {
  const sortQuery = useQueryGameStore((state) => state.sortQuery);
  const selectSort = useQueryGameStore((state) => state.selectSort);

  /*  console.log("SortSelector re-rendered"); */

  const sortArray = [
    { value: "name", name: "Name" },
    { value: "-released", name: "Newly Released" },
    { value: "-added", name: "Newly Added" },
    { value: "-created", name: "Newly Created" },
    { value: "-updated", name: "Newly Updated" },
    { value: "-rating", name: "Highest Rating" },
    { value: "-metacritic", name: "Highest MetaScore" },
  ];

  return (
    <Menu>
      <MenuButton
        width={"220px"}
        as={Button}
        rightIcon={<BsChevronDown />}
        textAlign={"start"}
      >
        {sortQuery?.name
          ? sortQuery.name === "Name"
            ? "Sort by Name"
            : sortQuery.name
          : "Sort by"}
        {/*  {`Sort by ${selectedSort?.name || ""}`} */}
      </MenuButton>
      <MenuList>
        {sortArray.map((eachSort) => (
          <MenuItem
            onClick={() => selectSort(eachSort)}
            key={eachSort.value}
            value={eachSort.value}
          >
            {eachSort.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
