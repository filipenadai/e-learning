import React from 'react';

import logoImg from '../../assets/logo.png';
import loading from '../../assets/splash_loading.json';
import { Container, Image, Loading } from './styles';

const Splash: React.FC = () => (
  <Container>
    <Image source={logoImg} />
    <Loading source={loading} autoPlay loop />
  </Container>
);

export default Splash;
