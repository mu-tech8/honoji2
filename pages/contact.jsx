import { useState } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  FormControl,
  Input,
  Textarea,
  Button,
  Center,
  FormLabel,
  Stack,
} from "@chakra-ui/react";
import Seo from "../components/layout/Seo";
import fetch from "node-fetch";

const Contact = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const sendMail = async (event) => {
    event.preventDefault();
    setIsDisabled(true);

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    if (res.ok) router.push("/thank-you");
  };

  return (
    <>
      <Seo pageTitle={"Contact"} pageDescription={"Contact"} />
      <Center fontSize="14px" mt={4}>
        お問い合わせはこちらから
      </Center>
      <Center fontSize="12px">Please contact from this form</Center>
      <Flex
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        my={8}
      >
        <form onSubmit={sendMail}>
          <Stack>
            <FormControl w={{ base: "300px", md: "500px" }}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="お名前"
                mb={1}
                required
              />
            </FormControl>
            <FormControl w={{ base: "300px", md: "500px" }}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="text"
                name="email"
                placeholder="メールアドレス"
                mb={1}
                required
              />
            </FormControl>
            <FormControl w={{ base: "300px", md: "500px" }}>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                rows="6"
                placeholder="本文"
                required
              ></Textarea>
            </FormControl>
            <FormControl w={{ base: "300px", md: "500px" }}>
              <Button
                mt={3}
                colorScheme="teal"
                type="submit"
                disabled={isDisabled}
              >
                送信
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Flex>
    </>
  );
};

export default Contact;
