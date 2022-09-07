import { Flex } from "@chakra-ui/react";
import Seo from "../components/layout/Seo";

const Thankyou = () => {
  return (
    <>
      <Seo
        pageTitle={"Thank you"}
        pageDescription={"Thank you"}
        // pageImg={"https://demo.com"}
        // pageImgWidth={1280}
        // pageImgHeight={960}
      />
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
      >
        Thank You!!
      </Flex>
    </>
  );
};

export default Thankyou;
