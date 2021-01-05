import {
  Input,
  css,
  useColorModeValue,
  useTheme,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useCallback } from "react";
import TodoCheckIcon from "./TodoCheckIcon";

const TodoInput = (props) => {
  const { onCommit, ...rest } = props;
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
    <InputGroup
      rounded="md"
      shadow="sm"
      bgColor={useColorModeValue("white", "dark.800")}
      {...rest}
    >
      <InputLeftElement
        pointerEvents="none"
        marginLeft={{ base: "10px", md: "17px" }}
        marginTop={{ base: "4px", md: "10px" }}
      >
        <TodoCheckIcon />
      </InputLeftElement>
      <Input
        aria-label="Add todo"
        variant="outline"
        focusBorderColor={useColorModeValue("light.500", "dark.500")}
        height={{ base: "48px", md: "64px" }}
        paddingLeft={{ base: "52px", md: "73px" }}
        paddingTop="1px"
        placeholder="Create a new todo..."
        _placeholder={{ color: useColorModeValue("light.600", "dark.400") }}
        transition=""
        fontSize={{ base: "xs", md: "18px" }}
        color="light.700"
        css={{ caretColor }}
        border="none"
        onKeyUp={onKeyUp}
      />
    </InputGroup>
  );
};

export default TodoInput;
