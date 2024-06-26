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
import {useNavigation} from '@react-navigation/native';
import {Input} from '../../components/Form/Input';
import {Button} from '../../components/Form/Button';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
  navigate: (screen: string) => void;
}

export const SignIn: FunctionComponent = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

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
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Entrar" />

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
