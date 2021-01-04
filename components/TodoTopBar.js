import { Button, Heading, HStack, useColorMode } from "@chakra-ui/react";

import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

const TodoTopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeIcon = colorMode === "light" ? MoonIcon : SunIcon;
  return (
    <HStack width="100%" justifyContent="space-between">
      <Heading
        paddingTop="1"
        as="h1"
        fontSize={{ base: "26px", md: "40px" }}
        fontWeight="bold"
        color="white"
        letterSpacing={{ base: "11px", md: "15px" }}
      >
        TODO
      </Heading>
      <Button variant="unstyled" minW="" onClick={toggleColorMode}>
        <ColorModeIcon
          display="inline-block"
          boxSize={{ base: "20px", md: "25px" }}
          marginBottom="1"
        />
      </Button>
    </HStack>
  );
};

export default TodoTopBar;
