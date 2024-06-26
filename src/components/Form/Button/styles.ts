import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primaryDark};
    border-radius: 8px;
    padding: 16px 0;
    margin-top: ${RFValue(16)}px;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(14)}px;
`;
