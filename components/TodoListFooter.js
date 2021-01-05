import { Button, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import TodoCheckbox from "./TodoCheckbox";

const TodoListFooter = (props) => {
  const { count, children, onClear, ...rest } = props;
  return (
    <HStack
      as="li"
      width="100%"
      color={useColorModeValue("light.600", "dark.600")}
      height="52px"
      justifyContent="space-between"
      paddingX={{ base: "5", md: "6" }}
      paddingBottom="1px"
      fontSize={{ base: "xs", md: "sm" }}
      {...rest}
    >
      <Text flex="1">{`${count} item${count != 1 ? "s" : ""} left`}</Text>
      {children}
      <Button flex="1"
        variant="unstyled"
        fontSize={{ base: "xs", md: "sm" }}
        transition="all"
        textAlign="right"
        fontWeight="normal"
        _hover={{ color: useColorModeValue("light.700", "dark.300") }}
        onClick={onClear}
      >
        Clear Completed
      </Button>
    </HStack>
  );
};

export default TodoListFooter;
