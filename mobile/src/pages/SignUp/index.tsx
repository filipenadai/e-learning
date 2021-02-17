import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  Container,
  Description,
  Button,
  ButtonText,
  ButtonFooter,
  ButtonFooterText,
  FormContainer,
} from './styles';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  const swipeAnimation = useRef(new Animated.Value(0)).current;

  const [isOpen, setIsOpen] = useState(true);

  const handleSwichIsSignUp = useCallback(() => {
    setIsOpen(state => !state);
  }, []);

  useEffect(() => {
    Animated.timing(swipeAnimation, {
      toValue: isOpen ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [isOpen, swipeAnimation]);

  return (
    <Container
      style={{
        transform: [
          {
            translateY: swipeAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [Dimensions.get('window').height - 60, 60],
            }),
          },
        ],
      }}
    >
      <ButtonFooter onPress={handleSwichIsSignUp}>
        <ButtonFooterText>Registre-se</ButtonFooterText>
      </ButtonFooter>
      <Description>
        Faça sua conta agora e aprenda diversos conteúdos gratuitamente!
      </Description>
      <FormContainer>
        <Input placeholder="Nome" name="Nome" />
        <Input placeholder="Email" name="email" />
        <Input placeholder="Senha" name="password" />
        <Input
          placeholder="Confirmação de senha"
          name="password_confirmation"
        />
        <Button onPress={() => console.log('Teste')}>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
