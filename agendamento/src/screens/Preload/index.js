import React, {useEffect} from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {Container, LoadingIcon} from './styles';
import ManicureLogo from '../../assets/manicure.svg';

export default () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                //validar o token
            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken();
    }, []); 


    return (
        <Container>
            <ManicureLogo 
            width="100%" height="160"
            />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}