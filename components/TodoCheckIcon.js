import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import CheckIcon from "./CheckIcon";

const TodoCheckIcon = (props) => {
  const { isChecked, disabled } = props;
  const bgGradient = "linear(to-br, gradient.start, gradient.end)";
  return (
    <Box
      bgColor={useColorModeValue("light.200", "dark.700")}
      padding="1px"
      rounded="full"
      bgGradient={isChecked ? bgGradient : undefined}
      _hover={disabled || isChecked ? undefined : { bgGradient }}
    >
      <Center
        cursor={disabled ? undefined : "pointer"}
        boxSize={{ base: "18px", md: "23px" }}
        rounded="full"
        bgColor={useColorModeValue("white", "dark.800")}
        borderColor={useColorModeValue("light.200", "dark.700")}
        bgGradient={isChecked ? bgGradient : undefined}
      >
        <CheckIcon boxSize="10px" display={isChecked ? undefined : "none"} />
      </Center>
    </Box>
  );
};

export default TodoCheckIcon;
