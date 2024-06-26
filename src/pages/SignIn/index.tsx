import {FunctionComponent} from 'react';
import {
  Container,
  Content,
  CreateAccount,
  CreateAccountText,
  ForgotPasswordButton,
  ForgotPasswordTitle,
  Logo,
  Title,
} from './styles';
import {ScrollView, KeyboardAvoidingView, Platform, View} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Form/Button';
import logo from '../../assets/logo.png';
import {InputControl} from '../../components/Form/InputControl';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export const SignIn: FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FieldValues>({resolver: yupResolver(formSchema)});

  const navigation = useNavigation<ScreenNavigationProp>();

  const handleSignIn = (form: IFormInputs) => {
    const data = {
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
              <Title>Faça seu logon</Title>
            </View>
            <InputControl
              autoCapitalize="none"
              autoCorrect={false}
              name="email"
              control={control}
              placeholder="Email"
              keyboardType="email-address"
              error={errors.email && errors.email?.message}
            />
            <InputControl
              name="password"
              control={control}
              placeholder="Senha"
              secureTextEntry
              autoCorrect={false}
              error={errors.password && errors.password?.message}
            />

            <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />

            <ForgotPasswordButton>
              <ForgotPasswordTitle>Esqueci minha senha</ForgotPasswordTitle>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <CreateAccount
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <CreateAccountText>Criar uma conta</CreateAccountText>
      </CreateAccount>
    </KeyboardAvoidingView>
  );
};
