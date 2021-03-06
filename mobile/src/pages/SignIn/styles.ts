import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #6548a3;
  position: relative;
`;

export const Image = styled.Image`
  margin-bottom: 56px;
`;

export const Title = styled.Text`
  font-size: 18px;
  line-height: 42px;
  color: #ff6680;
  font-family: 'Rubik-Regular';
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;

export const Button = styled(RectButton)`
  height: 56px;
  background: #ff6680;
  width: 100%;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;

export const ButtonFooter = styled(RectButton)`
  height: 56px;
  background: transparent;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0;

  height: 56px;
  background: #ff6680;
  width: 100%;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 30px;
  background: #6548a3;
`;
