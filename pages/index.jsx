import { client } from "../libs/client";
import { Image, Box, Stack, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import { Header } from "../components/header";

export default function Home({ painting }) {
  return (
    <>
      <header>
        <Header />
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
      <Wrap spacing={7} justify="center">
        {painting.map((painting) => (
          <WrapItem key={painting.id}>
            <Box w="260px" h="194px" borderRadius="10px" shadow="md" mx={4}>
              <Stack alignItems="center">
                <Image
                  mx="auto"
                  key={painting.id}
                  alt={"Painting of the author"}
                  src={painting.image.url}
                  borderRadius="4px"
                  layout={"intrinsic"}
                />
              </Stack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
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
