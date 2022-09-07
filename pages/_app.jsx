import { ChakraProvider } from "@chakra-ui/react";
import HeaderMenu from "../components/layout/HeaderMenu";
import FooterMenu from "../components/layout/FooterMenu";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <HeaderMenu />
      <Component {...pageProps} />
      <FooterMenu />
    </ChakraProvider>
  );
}

export default MyApp;
