import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export const MenuIconButton = (props) => {
  const { onOpen } = props;
  return (
    <IconButton
      area-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      position="absolute"
      top="0"
      right="0"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};
