import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react'
import { BiChevronDown } from 'react-icons/bi';

export const SortSelector = () => {
    return (
        <Menu>
          <MenuButton as={Button} rightIcon={<BiChevronDown />}>
           Order By: Relevance
          </MenuButton>
          <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Data added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rate</MenuItem>
          </MenuList>
        </Menu>
      );
}
