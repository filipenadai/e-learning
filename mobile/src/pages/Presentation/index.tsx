import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import ePresentation from '../../assets/e-presentation.png';
import student from '../../assets/student.png';
import {
  Container,
  EImage,
  StudentImage,
  Introduction,
  Title,
  Description,
  ImageContainer,
  Button,
  ButtonText,
} from './styles';

const Presentation: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToSignIn = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <Container>
      <ImageContainer>
        <EImage source={ePresentation} resizeMode="contain" />
        <StudentImage source={student} resizeMode="contain" />
      </ImageContainer>
      <Introduction>
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Description>
      </Introduction>
      <Button onPress={navigateToSignIn}>
        <ButtonText>Começar os estudos</ButtonText>
      </Button>
    </Container>
  );
};

export default Presentation;
