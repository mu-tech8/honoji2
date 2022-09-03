import { Flex, Stack, Heading, Box } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { PopoverMenu } from "./molecules/PopoverMenu";
import { memo } from "react";

export const Header = memo(() => {
  const router = useRouter();
  const onClickHome = router.push("/");
  const onClickWorks = router.push("/works");
  const onClickProfile = router.push("/profile");
  const onClickContact = router.push("/contact");

  return (
    <>
      <Flex alignItems="center" justifyContent="center" textAlign="center">
        <Heading fontSize="15px" fontFamily="游ゴシック">
          <Box mt={10} mb={{ base: "0", md: "8" }}>
            さとう　ほなつ
          </Box>
          <Box fontSize="15px" display={{ base: "none", md: "flex" }}>
            <Stack mx={4}>
              <Link href="/">Home</Link>
            </Stack>
            <Stack mx={4}>
              <Link href="/works">Works</Link>
            </Stack>
            <Stack mx={4}>
              <Link href="./profile">Profile</Link>
            </Stack>
            <Stack mx={4}>
              <Link href="./contact">Contact</Link>
            </Stack>
          </Box>
        </Heading>
      </Flex>
      <PopoverMenu
        onClickHome={onClickHome}
        onClickWorks={onClickWorks}
        onClickProfile={onClickProfile}
        onClickContact={onClickContact}
      />
    </>
  );
});
