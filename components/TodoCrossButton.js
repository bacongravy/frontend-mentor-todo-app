import { Button } from "@chakra-ui/react";
import CrossIcon from "./CrossIcon";

const TodoCrossButton = (props) => {
    return (
      <Button variant="unstyled" minWidth="0" transition="all" {...props}>
        <CrossIcon />
      </Button>
    );
  };
  
export default TodoCrossButton;
