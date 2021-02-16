import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #fff;
  border-radius: 100px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #fff;
  flex-direction: row;
  align-items: center;
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #ff6680;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #ff6680;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
