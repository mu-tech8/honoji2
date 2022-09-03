import { client } from "../libs/client";
import { Flex, Center, Box } from "@chakra-ui/react";

export default function Profile({ painting }) {
  return (
    <>
      <Center mt={24} mb={8}>
        宮城県気仙沼市生まれ・在住
      </Center>
      <Center my={8} p={2}>
        東北芸術工科大学美術科洋画コース卒業
      </Center>
      <Center my={8} p={2}>
        絵描き/似顔絵屋
      </Center>
      <Center my={8} p={2}>
        原風景である故郷の海と山をモチーフに、
      </Center>
      <Center my={8} p={2}>
        夢みがちな「この世にあって欲しいもの」を作っています。
      </Center>
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
