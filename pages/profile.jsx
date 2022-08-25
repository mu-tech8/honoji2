import { client } from "../libs/client";
import { Heading, Box, Image, Stack, Grid, Flex } from "@chakra-ui/react";
import { Header } from "../components/header";

export default function Profile({ painting }) {
  return (
    <>
      <Header />
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
      >
        プロフィールはここに書きます
      </Flex>
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
