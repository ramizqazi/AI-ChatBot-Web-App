import React from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  FormErrorMessage,
  InputRightElement,
  Input as ChakraInput,
} from '@chakra-ui/react';

// import { ReactComponent as ErrorIcon } from '../assets/icons/error-icon.svg';

/* =============================================================================
<Input />
============================================================================= */
const Input = ({ errorText, label, ...props }) => {
  return (
    <FormControl isInvalid={errorText} w={['auto', 'auto', 450]} mb={2}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <ChakraInput {...props} />
        <InputRightElement h="full">
          {/* {errorText && <ErrorIcon />} */}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
};

/* Export
============================================================================= */
export default Input;
