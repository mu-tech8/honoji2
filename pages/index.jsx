import { client } from "../libs/client";
import { Image, Flex, Center } from "@chakra-ui/react";
import Seo from "../components/layout/Seo";
import React from "react";

const Home = ({ painting }) => {
  return (
    <>
      <Seo
        pageTitle={"Home"}
        pageDescription={"Home"}
        // pageImg={"https://demo.com"}
        // pageImgWidth={1280}
        // pageImgHeight={960}
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
        fontSize="12px"
      >
        生まれ育った小さな港町を素材に
        <br />
        「この世にあって欲しいもの」を作っています。
      </Flex>
      <Center>
        <Image
          mx="auto"
          key={painting.id}
          alt={"Painting of the author"}
          src={
            "https://images.microcms-assets.io/assets/e957217dd6944ec9abecc16f1d79645d/53d81662681e433f87d98d51e3028d05/oc0efa1ad7222e5370ebb0812b4c14f7d_4620693218546928216_210907_0.jpg"
          }
          borderRadius="4px"
          layout={"intrinsic"}
          w={{ base: "300px", md: "500px" }}
          h={{ base: "200px", md: "400px" }}
        />
      </Center>
    </>
  );
};
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "painting" });

  return {
    props: {
      painting: data.contents,
    },
  };
};

export default Home;
