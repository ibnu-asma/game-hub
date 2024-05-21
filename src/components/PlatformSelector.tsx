import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";



interface Props {
    onSelectePlatform : (platform: Platform) => void;
    selectedPlatform: Platform | null
}

export const PlatformSelector = ( { onSelectePlatform, selectedPlatform}: Props) => {
  const { data, error } = usePlatforms();
  console.log(data);
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => onSelectePlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
