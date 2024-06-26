import React, {FunctionComponent} from 'react';
import {
  BackToSignIn,
  BackToSignInText,
  Container,
  Content,
  Logo,
  Title,
} from './styles';
import {Input} from '../../components/Form/Input';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components/Form/Button';
import logo from '../../assets/logo.png';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const SignUp: FunctionComponent = () => {
  const {goBack} = useNavigation<ScreenNavigationProp>();

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
            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />

            <Button title="Criar conta" />
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
