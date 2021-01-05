import { VStack, Box } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { useCallback, useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import update from "immutability-helper";
import { v4 as uuidv4 } from "uuid";

import useLocalState from "../hooks/useLocalState";
import TodoBackground from "./TodoBackground";
import TodoTopBar from "./TodoTopBar";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";
import TodoListFooter from "./TodoListFooter";
import TodoBottomBar from "./TodoBottomBar";
import TodoFilterRadioGroup from "./TodoFilterRadioGroup";
import TodoBottomText from "./TodoBottomText";
import TodoAttribution from "./TodoAttribution";

const DEFAULT_ITEMS = [
  { id: uuidv4(), text: "Complete online JavaScript course", completed: true },
  { id: uuidv4(), text: "Jog around the park 3x", completed: false },
  { id: uuidv4(), text: "10 minutes meditation", completed: false },
  { id: uuidv4(), text: "Read for 1 hour", completed: false },
  { id: uuidv4(), text: "Pick up groceries", completed: false },
  {
    id: uuidv4(),
    text: "Complete Todo App on Frontend Mentor",
    completed: false,
  },
];

const SortableTodoList = SortableContainer(TodoList);
const SortableTodoListItem = SortableElement(TodoListItem);

const Todo = () => {
  const [items, setItems] = useLocalState("todo-items", DEFAULT_ITEMS);
  const [filterSelection, setFilterSelection] = useState("all");

  const activeCount = items.filter((item) => !item.completed).length;

  const addTodo = useCallback(
    (text) => {
      setItems([...items, { id: uuidv4(), text, completed: false }]);
    },
    [items]
  );

  const toggleTodo = useCallback(
    ({ index, completed }) => {
      const newItems = [...items];
      newItems[index].completed = completed;
      setItems(newItems);
    },
    [items]
  );

  const clearTodo = useCallback(
    (index) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    },
    [items]
  );

  const clearCompletedTodos = useCallback(() => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  }, [items]);

  const moveTodo = useCallback(
    ({ newIndex, oldIndex }) => {
      if (newIndex != oldIndex) {
        const newItems = update(items, {
          $splice: [
            [oldIndex, 1],
            [newIndex, 0, items[oldIndex]],
          ],
        });
        setItems(newItems);
      }
    },
    [items]
  );

  return (
    <TodoBackground>
      <VStack margin="auto" paddingX="6" maxW="588px" align="stretch">
        <Box height={{ base: "32px", md: "62px" }} />
        <TodoTopBar />
        <Box height={{ base: "14px", md: "20px" }} />
        <TodoInput role="form" onCommit={addTodo}/>
        <Box height={{ base: undefined, md: "8px" }} />
        <SortableTodoList
          role="main"
          items={items}
          shouldCancelStart={({ target }) =>
            target.closest("label") || target.closest("button")
          }
          onSortStart={(_, e) => e.preventDefault()}
          onSortEnd={moveTodo}
          helperClass="todo-list-item-dragging"
        >
          {items.map(({ id, text, completed }, index) => {
            return (
              ((completed && filterSelection !== "active") ||
                (!completed && filterSelection !== "completed")) && (
                <SortableTodoListItem
                  index={index}
                  key={id}
                  sortIndex={index}
                  text={text}
                  completed={completed}
                  onChange={toggleTodo}
                  onClear={clearTodo}
                />
              )
            );
          })}
          <TodoListFooter count={activeCount} onClear={clearCompletedTodos}>
            <TodoFilterRadioGroup
              display={{ base: "none", md: "flex" }}
              value={filterSelection}
              onChange={setFilterSelection}
            />
          </TodoListFooter>
        </SortableTodoList>
        <Box />
        <TodoBottomBar display={{ base: "flex", md: "none" }}>
          <TodoFilterRadioGroup
            value={filterSelection}
            onChange={setFilterSelection}
          />
        </TodoBottomBar>
        <TodoBottomText paddingTop={{ base: "7", md: "8" }} />
        <TodoAttribution
          paddingTop={{ base: "4", md: "6" }}
          paddingBottom="8"
        />
      </VStack>
    </TodoBackground>
  );
};

export default Todo;
