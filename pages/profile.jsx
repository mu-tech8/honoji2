import { Center } from "@chakra-ui/react";
import Seo from "../components/layout/Seo";

const Profile = () => {
  return (
    <>
      <Seo
        pageTitle={"Profile"}
        pageDescription={"Profile"}
        // pageImg={"https://demo.com"}
        // pageImgWidth={1280}
        // pageImgHeight={960}
      />
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
        夢みがちな「この世にあって欲しいもの」
      </Center>
      <Center my={8} p={2}>
        を作っています。
      </Center>
    </>
  );
};

export default Profile;
