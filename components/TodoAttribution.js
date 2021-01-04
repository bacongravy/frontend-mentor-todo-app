import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const TodoAttribution = (props) => {
  return (
    <Flex
      direction={{ base: "row", md: "row" }}
      justifyContent="center"
      align="center"
      fontSize="10px"
      color={useColorModeValue("light.600", "dark.600")}
      {...props}
    >
      <Text>
        Challenge by{" "}
        <Link
          textDecoration="underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>{" "}
      </Text>
      <Text
        display={{ base: "inline", md: "inline" }}
        paddingLeft={{ base: "2", md: "2" }}
      >
        —
      </Text>
      <Text
        paddingTop={{ base: "0", md: "0" }}
        paddingLeft={{ base: "2", md: "2" }}
      >
        Made with{" "}
        <Box as="span" color="red.600">
          &hearts;
        </Box>{" "}
        by{" "}
        <Link
          textDecoration="underline"
          href="https://github.com/bacongravy/frontend-mentor-todo-app"
          target="_blank"
        >
          David Kramer
        </Link>
      </Text>
    </Flex>
  );
};

export default TodoAttribution;
