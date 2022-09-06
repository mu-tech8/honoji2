import { client } from "../libs/client";
import {
  Image,
  Box,
  Stack,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import Seo from "../components/layout/Seo";

const Works = ({ painting }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const paintingUrl = painting.map((painting) => painting.image.url);

  const [selectedIndex, setSelectedIndex] = useState("");
  const onClickImage = (index) => {
    setSelectedIndex(index);
    onOpen();
  };

  return (
    <>
      <Seo
        pageTitle={"Works"}
        pageDescription={"Works"}
        // pageImg={"https://demo.com"}
        // pageImgWidth={1280}
        // pageImgHeight={960}
      />
      <Wrap
        spacing={8}
        justify="center"
        mx="auto"
        mt={16}
        w={{ base: "320px", md: "1400px" }}
      >
        {painting.map((painting, index) => (
          <WrapItem key={painting.id}>
            <Box w="260px" h="194px" borderRadius="10px" shadow="md" mx={4}>
              <Stack
                alignItems="center"
                onClick={() => onClickImage(index)}
                _hover={{ cursor: "pointer" }}
              >
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

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        returnFocusOnClose={false}
        size={{ base: "lg", md: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Image
              mx="auto"
              key={painting.id}
              alt={"Painting of the author"}
              src={paintingUrl[selectedIndex]}
              borderRadius="4px"
              layout={"intrinsic"}
            />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
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

export default Works;
