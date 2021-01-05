import { Button } from "@chakra-ui/react";
import CrossIcon from "./CrossIcon";

const TodoCrossButton = (props) => {
    return (
      <Button variant="unstyled" minWidth="0" transition="" {...props}>
        <CrossIcon />
      </Button>
    );
  };
  
export default TodoCrossButton;
