import { VStack, useColorModeValue } from "@chakra-ui/react";

export const TodoList = (props) => {
  const { items, ...rest } = props;
  return (
    <VStack
      as="ul"
      shadow={{ base: "md", md: "xl" }}
      spacing="-1px"
      bgColor={useColorModeValue("white", "dark.800")}
      rounded="md"
      overflow="hidden"
      transform="translateY(0);" // weird hack to keep the border from appearing outside of rounded corners during drags (https://stackoverflow.com/questions/5736503/how-to-make-css3-rounded-corners-hide-overflow-in-chrome-opera)
      {...rest}
    />
  );
};

export default TodoList;
