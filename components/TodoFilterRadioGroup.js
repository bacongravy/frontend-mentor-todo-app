import {
  Box,
  HStack,
  Text,
  useColorModeValue,
  useRadioGroup,
  VisuallyHidden,
} from "@chakra-ui/react";

import TodoFilterRadio from "./TodoFilterRadio";

const TodoFilterRadioGroup = (props) => {
  const { value, onChange, ...rest } = props;
  const radioGroup = {
    name: "filter",
    defaultValue: "all",
  };
  if (value) radioGroup.value = value;
  if (onChange) radioGroup.onChange = onChange;
  const { getRootProps, getRadioProps } = useRadioGroup(radioGroup);
  const group = getRootProps();
  return (
    <Box as="fieldset">
      <VisuallyHidden>
        <Text as="legend">Filter:</Text>
      </VisuallyHidden>
      <HStack
        {...group}
        fontSize="sm"
        color={useColorModeValue("light.600", "dark.600")}
        spacing="18px"
        justifyContent="center"
        {...rest}
      >
        <TodoFilterRadio {...getRadioProps({ value: "all" })}>
          All
        </TodoFilterRadio>
        <TodoFilterRadio {...getRadioProps({ value: "active" })}>
          Active
        </TodoFilterRadio>
        <TodoFilterRadio {...getRadioProps({ value: "completed" })}>
          Completed
        </TodoFilterRadio>
      </HStack>
    </Box>
  );
};

export default TodoFilterRadioGroup;
