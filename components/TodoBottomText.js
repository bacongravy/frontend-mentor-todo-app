import { HStack, Text, useColorModeValue } from "@chakra-ui/react";

const TodoBottomText = (props) => {
    return (
      <HStack justifyContent="center" {...props}>
        <Text fontSize="sm" color={useColorModeValue("light.600", "dark.600")}>
          Drag and drop to reorder list
        </Text>
      </HStack>
    );
  };
  
export default TodoBottomText;
