
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";


interface Props {
  platforms: Platform[];
}
export const PlatformIconList = ({ platforms = [] }: Props) => {

  const iconMap : {[key : string] : IconType} = {
        android: FaAndroid,
        linux: FaLinux,
        mac: FaApple,
       ios: MdPhoneIphone,
       nintendo: SiNintendo,
       pc:  FaWindows,
       playstation:  FaPlaystation,
       web: BsGlobe,
       xbox:  FaXbox
    }
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color= 'gray.500'></Icon>
      ))}
    </HStack>
  );
};
