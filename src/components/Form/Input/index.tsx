import {FunctionComponent} from 'react';
import {TextInputProps} from 'react-native';
import theme from '../../../global/styles/theme';
import {Container} from './styles';

export const Input: FunctionComponent<TextInputProps> = ({...otherProps}) => {
  return (
    <Container placeholderTextColor={theme.colors.gray500} {...otherProps} />
  );
};
