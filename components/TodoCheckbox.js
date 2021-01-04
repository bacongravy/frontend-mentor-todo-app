import { HStack, Text, useCheckbox, useColorModeValue } from "@chakra-ui/react";
import TodoCheckIcon from "./TodoCheckIcon";

const TodoCheckbox = (props) => {
  const { state, htmlProps, getInputProps, getCheckboxProps } = useCheckbox(
    props
  );
  const { isChecked } = state;
  const textColor = useColorModeValue(
    isChecked ? "light.300" : undefined,
    isChecked ? "dark.600" : "dark.300"
  );
  return (
    <label {...htmlProps}>
      <input {...getInputProps()} />
      <div {...getCheckboxProps()}>
        <HStack alignItems="center" spacing={{ base: "3", md: "6" }}>
          <TodoCheckIcon {...state} />
          <Text
            paddingTop="2px"
            textDecoration={isChecked ? "line-through" : undefined}
            color={textColor}
          >
            {props.children}
          </Text>
        </HStack>
      </div>
    </label>
  );
};

export default TodoCheckbox;
