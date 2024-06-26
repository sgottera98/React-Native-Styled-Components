import React, {FunctionComponent} from 'react';
import {
  BackToSignIn,
  BackToSignInText,
  Container,
  Content,
  Logo,
  Title,
} from './styles';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Form/Button';
import logo from '../../assets/logo.png';
import {useForm, FieldValues} from 'react-hook-form';
import {InputControl} from '../../components/Form/InputControl';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ScreenNavigationProp {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export const SignUp: FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({resolver: yupResolver(formSchema)});

  const {goBack} = useNavigation<ScreenNavigationProp>();

  const handleSignUp = (form: IFormInputs) => {
    const data = {
      name: form.name,
      email: form.email,
      password: form.password,
    };

    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      enabled
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Container>
          <Content>
            <Logo source={logo} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <InputControl
              autoCapitalize="words"
              autoCorrect={false}
              name="name"
              control={control}
              placeholder="Nome"
              error={errors.name?.message}
            />
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              control={control}
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email?.message}
              />
            <InputControl
              name="password"
              control={control}
              placeholder="Senha"
              secureTextEntry
              autoCorrect={false}
              error={errors.password?.message}
            />

            <Button title="Criar conta" onPress={handleSubmit(handleSignUp)} />
          </Content>
        </Container>
      </ScrollView>
      <BackToSignIn
        onPress={() => {
          goBack();
        }}>
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </KeyboardAvoidingView>
  );
};
