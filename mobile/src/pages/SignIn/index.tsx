import React from 'react';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Image,
  Button,
  ButtonText,
  Footer,
  ButtonFooter,
  FormContainer,
} from './styles';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Image source={logoImg} />
        <Input name="email" />
        <Input name="password" />
        <Button onPress={() => console.log('Teste')}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </FormContainer>
      <Footer>
        <ButtonFooter>
          <ButtonText>Registre-se</ButtonText>
        </ButtonFooter>
      </Footer>
    </Container>
  );
};

export default SignIn;
