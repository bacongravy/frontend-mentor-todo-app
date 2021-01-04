import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";

import TodoTheme from "../theme"
import JosefinSans from "../components/JosefinSans"
import Todo from "../components/Todo"

const Home = () => {
  return (
    <ChakraProvider theme={extendTheme(TodoTheme)}>
      <JosefinSans />
      <Todo />
    </ChakraProvider>
  );
};

export default Home;
