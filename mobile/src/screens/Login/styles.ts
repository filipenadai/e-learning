import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: #6548a3;

  position: relative;
`;

export const BackgroundImage = styled.Image`
  height: 70%;
  width: 100%;

  position: absolute;
  top: 0;
`;

export const UserImage = styled.Image``;

export const Content = styled.View`
  padding: 0 40px;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Title = styled.Text`
  margin: 16px 0;
  font-family: 'Rubik-Regular';
  font-size: 36px;
  line-height: 42px;
  color: #ff6680;
`;

export const Description = styled.Text`
  margin: 16px 0;
  font-family: 'Roboto-Regular';
  font-size: 15px;
  line-height: 25px;
  color: #edebf5;
`;

export const ButtonLoginText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 15px;
  line-height: 25px;
  color: #edebf5;
`;

export const ButtonLogin = styled(RectButton)`
  margin-top: 32px;
  height: 56px;
  width: 100%;
  border-radius: 28px;

  justify-content: center;
  align-items: center;

  background: #ff6680;
`;
