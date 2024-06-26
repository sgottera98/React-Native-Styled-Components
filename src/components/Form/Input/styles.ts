import {TextInput} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components";

export const Container = styled(TextInput)`
    width: 100%;
    padding: 18px 16px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    margin-bottom: 16px;
    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(14)}px;
`