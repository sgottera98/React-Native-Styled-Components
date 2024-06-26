import {FunctionComponent} from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {Container, Error} from './styles';
import {Input} from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string | undefined;
}

export const InputControl: FunctionComponent<Props> = ({
  control,
  name,
  error,
  ...otherProps
}) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            placeholder="First name"
            onChangeText={onChange}
            value={value}
            {...otherProps}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
