import { client } from "../libs/client";
import { Image, Grid, Flex } from "@chakra-ui/react";
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
