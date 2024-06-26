import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    color: ${({theme}) => theme.colors.light};
    font-weight: bold;
    margin-bottom: 24px;
`;

export const Logo = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    margin-bottom: 24px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordTitle = styled.Text`
    color: ${({theme}) => theme.colors.light};
    font-size: ${RFValue(14)}px;
`;

export const CreateAccount = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({theme}) => theme.colors.primary};
    border-top-width: 1px;
    border-color: ${({theme}) => theme.colors.light};
    padding: 16px 0;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CreateAccountText = styled.Text`
    color: ${({theme}) => theme.colors.light};
    font-size: ${RFValue(14)}px;
    font-weight: bold;
    margin-left: 16px;
`;