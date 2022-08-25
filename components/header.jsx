import { Flex, Stack } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
      >
        さとう　ほなつ
      </Flex>
      <Flex alignItems="center" justifyContent="center" mt={8}>
        <Stack mx={4}>
          <Link href="/">Home</Link>
        </Stack>
        <Stack mx={4}>
          <Link href="./profile">Profile</Link>
        </Stack>
        <Stack mx={4}>
          <Link href="https://www.instagram.com/_249cm/">Instagram</Link>
        </Stack>
      </Flex>
    </>
  );
};
