import { HStack, useColorModeValue } from "@chakra-ui/react";
import TodoCrossButton from "./TodoCrossButton";
import TodoCheckbox from "./TodoCheckbox";

export const TodoListItem = ({
  sortIndex,
  text,
  completed,
  onChange,
  onClear,
}) => {
  return (
    <HStack
      as="li"
      data-sort-index={sortIndex}
      color="light.700"
      fontSize={{ base: "xs", md: "18px" }}
      height={{ base: "54px", md: "62px" }}
      width="100%"
      marginTop="-1px"
      paddingX={{ base: "5", md: "6" }}
      justifyContent="space-between"
      borderTop="1px"
      borderTopColor={useColorModeValue("light.200", "dark.700")}
      borderBottom="1px"
      borderBottomColor={useColorModeValue("light.200", "dark.700")}
      css={{ ":hover .todo-cross-button": { opacity: 1.0 } }}
    >
      <TodoCheckbox
        value={sortIndex}
        isChecked={completed}
        onChange={(e) => {
          const index = e.target.value;
          const completed = e.target.checked;
          onChange && onChange({ index, completed});
        }}
      >
        {text}
      </TodoCheckbox>
      <TodoCrossButton
        aria-label="Clear todo"
        className="todo-cross-button"
        onClick={(e) => {
          const index = parseInt(
            e.target.closest("li").attributes["data-sort-index"].value
          );
          onClear && onClear(index);
        }}
        opacity={{ base: undefined, md: "0" }}
      />
    </HStack>
  );
};

export default TodoListItem;
