import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// eslint-disable-next-line react/display-name
export const ModalMenu = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onClickHome, onClickWorks, onClickProfile, onClickContact } = props;

  return (
    <>
      <Button
        bg="white"
        display={{ base: "block", md: "none" }}
        position="absolute"
        top="1"
        right="1"
        onClick={onOpen}
      >
        <HamburgerIcon w={5} h={5} fontSize="1.25rem" bg="white" />
      </Button>
      <Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center" borderBottom="1px lightGray solid">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <Button
              w="100%"
              onClick={() => {
                onClickHome();
                onClose();
              }}
              bg="white"
            >
              Home
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickWorks();
                onClose();
              }}
              bg="white"
            >
              Works
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickProfile();
                onClose();
              }}
              bg="white"
            >
              Profile
            </Button>
            <Button
              w="100%"
              onClick={() => {
                onClickContact();
                onClose();
              }}
              bg="white"
            >
              Contact
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
