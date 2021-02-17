import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(Animated.View)`
  flex: 1;
  padding: 0 30px;
  background: #ff6680;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Description = styled.Text`
  margin-top: 100px;
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #ff6680;
  font-family: 'Roboto-Regular';
`;

export const ButtonFooterText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  font-family: 'Roboto-Regular';
`;

export const Button = styled(RectButton)`
  height: 56px;
  background: #fff;
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

export const FormContainer = styled.View`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #ff6680;
`;
