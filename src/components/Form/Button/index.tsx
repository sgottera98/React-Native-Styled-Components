import React, {FunctionComponent} from 'react';
import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  title,
  ...otherProps
}) => {
  return (
    <Container {...otherProps}>
      <Title>{title}</Title>
    </Container>
  );
};
