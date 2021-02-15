import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 30px;

  position: relative;
`;

export const ImageContainer = styled.View`
  position: absolute;
  top: 0;
`;

export const EImage = styled.Image``;

export const StudentImage = styled.Image`
  width: 200px;
  height: 300px;
  margin-top: -380px;
  right: -36px;
`;

export const Introduction = styled.View`
  width: 100%;
  padding: 0 40px;
  margin-top: 400px;
`;

export const Title = styled.Text`
  font-size: 36px;
  line-height: 42px;
  color: #ff6680;
  font-family: 'Rubik-Regular';
`;

export const Description = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #fff;
  font-family: 'Roboto-Regular';
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
  margin-top: 40px;

  justify-content: center;
  align-items: center;
`;
