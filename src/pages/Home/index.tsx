import React from 'react';
import {
  Container,
  Header,
  Icon,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import {TouchableOpacity} from 'react-native';

const Home = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={avatarDefault} />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Bruno</UserName>
            </UserInfoDetail>
          </UserInfo>
          <TouchableOpacity>
            <Icon>Sair</Icon>
          </TouchableOpacity>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
