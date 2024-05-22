import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectePlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

export const PlatformSelector = ({
  onSelectePlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();

  const selectedPaltform = data?.results.find(p => p.id == selectedPlatformId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDown />}>
        {selectedPaltform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectePlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
