import { Box, useColorModeValue } from "@chakra-ui/react";

export const TodoBottomBar = (props) => {
  return (
    <Box
      height="48px"
      shadow="sm"
      bgColor={useColorModeValue("white", "dark.800")}
      rounded="md"
      justifyContent="center"
      {...props}
    />
  );
};

export default TodoBottomBar;
