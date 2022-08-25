import { client } from "../libs/client";
import { Heading, Box, Image, Stack, Grid, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ painting }) {
  return (
    <>
      <header>
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
      </header>
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
      >
        生まれ育った小さな港町を素材に
        <br />
        「この世にあって欲しいもの」を作っています。
      </Flex>
      <Grid templateColumns="repeat(3, 1fr)" rowGap={6}>
        {painting.map((painting) => (
          <Image
            mx="auto"
            key={painting.id}
            alt={"Painting of the author"}
            src={painting.image.url}
            width={480}
            height={360}
            borderRadius="4px"
            layout={"intrinsic"}
          />
        ))}
      </Grid>
    </>
  );
}
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "painting" });

  return {
    props: {
      painting: data.contents,
    },
  };
};
