import { Box, useColorModeValue, useRadio } from "@chakra-ui/react";

const FilterRadio = (props) => {
  const { isChecked } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const hoverColor = useColorModeValue("light.700", "dark.300");
  const checkedColor = useColorModeValue("light.500", "dark.500");
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        fontWeight="bold"
        _hover={isChecked ? undefined : { color: hoverColor }}
        _checked={{ color: checkedColor }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default FilterRadio;
