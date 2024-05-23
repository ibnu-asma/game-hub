import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import useGameQueryStore from "../stores/gameQueryStore";


export const SortSelector = () => {
  const sortOrders = [
    { value: ' ', label: 'Revlevance' },
    { value: '-added', label: 'Data added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rate' },
  ];
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  const setSelectedOrder  = useGameQueryStore(s => s.setSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance" }
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
          onClick={() => setSelectedOrder(order.value) }
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
