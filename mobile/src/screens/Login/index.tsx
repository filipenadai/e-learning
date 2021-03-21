import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackgroundImage,
  UserImage,
  ButtonLogin,
  ButtonLoginText,
  Content,
  Title,
  Description,
} from './styles';

import eImg from '../../assets/e.png';
import userImg from '../../assets/user.png';

const Login: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToCourses = useCallback(() => {
    navigate('Courses');
  }, [navigate]);

  return (
    <Container>
      <BackgroundImage source={eImg} resizeMode="contain" />
      <Content>
        <UserImage source={userImg} resizeMode="contain" />
        <Title>Aprenda da melhor forma</Title>
        <Description>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento
        </Description>
        <ButtonLogin onPress={handleNavigateToCourses}>
          <ButtonLoginText>Começar os estudos</ButtonLoginText>
        </ButtonLogin>
      </Content>
    </Container>
  );
};

export default Login;
