import React, { memo } from "react";
import {
  Popover,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// eslint-disable-next-line react/display-name
export const PopoverMenu = memo((props) => {
  const { onClickHome, onClickWorks, onClickProfile, onClickContact } = props;

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="white"
          display={{ base: "block", md: "none" }}
          position="absolute"
          top="1"
          right="1"
        >
          <HamburgerIcon w={5} h={5} fontSize="1.25rem" bg="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={48} mr={1}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Menu</PopoverHeader>
        <PopoverBody>
          <Button w="100%" onClick={onClickHome} bg="white">
            Home
          </Button>
          <Button w="100%" onClick={onClickWorks} bg="white">
            Works
          </Button>
          <Button w="100%" onClick={onClickProfile} bg="white">
            Profile
          </Button>
          <Button w="100%" onClick={onClickContact} bg="white">
            Contact
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
});
