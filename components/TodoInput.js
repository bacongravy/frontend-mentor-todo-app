import { HStack, Input, css, useColorModeValue, useTheme } from "@chakra-ui/react";
import { useCallback } from "react";
import TodoCheckIcon from "./TodoCheckIcon";

const TodoInput = ({ onCommit }) => {
  const caretColor = css({ color: useColorModeValue("light.500", "dark.500") })(
    useTheme()
  ).color;
  const onKeyUp = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onCommit && onCommit(e.target.value);
        e.target.value = "";
      }
    },
    [onCommit]
  );
  return (
    <HStack
      paddingX={{ base: "5", md: "6" }}
      spacing={{ base: "3", md: "6" }}
      rounded="md"
      shadow="sm"
      bgColor={useColorModeValue("white", "dark.800")}
    >
      <TodoCheckIcon disabled />
      <Input
        variant="unstyled"
        height={{ base: "48px", md: "64px" }}
        placeholder="Create a new todo..."
        _placeholder={{ color: useColorModeValue("light.600", "dark.400") }}
        transition=""
        fontSize={{ base: "xs", md: "18px" }}
        color="light.700"
        css={{ caretColor }}
        border="none"
        onKeyUp={onKeyUp}
      />
    </HStack>
  );
};

export default TodoInput;
