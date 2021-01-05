import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";

const TodoBackground = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      minH="100vh"
      minW="100vw"
      bgColor={useColorModeValue("light.100", "dark.900")}
      bgImage={{
        base: `url('/bg-mobile-${colorMode}.jpg')`,
        sm: `url('/bg-desktop-${colorMode}.jpg')`,
      }}
      bgRepeat="no-repeat"
      bgSize="100vw"
      {...props}
    />
  );
};

export default TodoBackground;
