import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export const SortSelector = ({onSelectOrder, sortOrder} : Props) => {
  const sortOrders = [
    { value: ' ', label: 'Revlevance' },
    { value: '-added', label: 'Data added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rate' },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance" }
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
          onClick={() => onSelectOrder(order.value) }
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
