import { ButtonGroup, Container, Stack, Text, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaTshirt } from "react-icons/fa";
import Link from "next/link";

const FooterMenu = () => (
  <Container
    as="footer"
    role="contentinfo"
    py={{ base: "8", md: "10" }}
    mt={{ base: "12", md: "60" }}
  >
    <Stack spacing={1}>
      <Stack justify="space-between" direction="row" align="center">
        <ButtonGroup variant="ghost">
          <Link href="https://www.instagram.com/_249cm/">
            <a target="_blank">
              <Icon
                as={FaInstagram}
                w={5}
                h={5}
                fontSize="1.25rem"
                mt={12}
                mr={1}
              />
            </a>
          </Link>
          <Link href="https://twitter.com/_24900mm">
            <a target="_blank">
              <Icon as={FaTwitter} w={5} h={5} fontSize="1.25rem" mt={12} />
            </a>
          </Link>
          <Link href="https://suzuri.jp/_249cm">
            <a target="_blank">
              <Icon as={FaTshirt} w={5} h={5} fontSize="1.25rem" mt={12} />
            </a>
          </Link>
        </ButtonGroup>
      </Stack>
      <Text fontSize="xs" color="lightGray">
        &copy; {new Date().getFullYear()} Honatsu Sato. All rights reserved.
        <br />
        ※当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。
      </Text>
    </Stack>
  </Container>
);

export default FooterMenu;
