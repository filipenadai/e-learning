import React, { forwardRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: any;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = () => {
  return (
    <Container isErrored={false} isFocused={false}>
      <TextInput keyboardAppearance="dark" placeholderTextColor="#666360" />
    </Container>
  );
};

export default forwardRef(Input);
