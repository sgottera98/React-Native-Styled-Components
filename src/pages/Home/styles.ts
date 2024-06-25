import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const Header = styled.View`
    width: 100%;
    /* height: ${RFValue(120)}px; */
    height: ${RFPercentage(20)}px;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${props => props.theme.colors.light};
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: ${RFValue(20)}px;
    padding-bottom: ${RFValue(20)}px;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(30)}px;
`;

export const UserInfoDetail = styled.View`
    margin-left: ${RFValue(15)}px;
`;

export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.light};
    font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.light};
    font-size: ${RFValue(18)}px;
    font-weight: bold;
`;

export const Icon = styled.Text`
    color: ${({theme}) => theme.colors.light};
`;
