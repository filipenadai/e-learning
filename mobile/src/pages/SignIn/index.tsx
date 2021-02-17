import React from 'react';

import logoImg from '../../assets/logo.png';
import { Container, Image, Button, ButtonText, FormContainer } from './styles';

import Input from '../../components/Input';
import SignUp from '../SignUp';

const SignIn: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Image source={logoImg} />
        <Input placeholder="Email" name="email" />
        <Input placeholder="Senha" name="password" />
        <Button onPress={() => console.log('Teste')}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </FormContainer>
      <SignUp />
    </Container>
  );
};

export default SignIn;
