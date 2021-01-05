import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import TodoTheme from "../theme";
import JosefinSans from "../components/JosefinSans";
import Todo from "../components/Todo";
import Head from "next/head";

const Home = () => {
  return (
    <ChakraProvider theme={extendTheme(TodoTheme)}>
      <Head>
        <title>Todo</title>
      </Head>
      <JosefinSans />
      <Todo />
    </ChakraProvider>
  );
};

export default Home;
