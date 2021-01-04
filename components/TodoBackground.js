import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";

const TodoBackground = (props) => {
    const { colorMode } = useColorMode();
    return (
      <Box bgColor={useColorModeValue("light.100", "dark.900")}>
        <Box
          minH="100vh"
          minW="100vw"
          bgImage={{
            base: `url('/bg-mobile-${colorMode}.jpg')`,
            sm: `url('/bg-desktop-${colorMode}.jpg')`,
          }}
          bgRepeat="no-repeat"
          bgSize="100vw"
          {...props}
        ></Box>
      </Box>
    );
  };
  
  export default TodoBackground;
