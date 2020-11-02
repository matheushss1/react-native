import React, {useState} from 'react';
import { Text } from 'react-native';
import  {useNavigation} from '@react-navigation/native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold

} from './styles';

import SignInput from '../../components/SignInput';


import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/lock.svg';
import ManicureLogo from '../../assets/manicure.svg';

export default () => {
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    };
    const handleSignClick = () => {

    };

    return (
        <Container>
            <ManicureLogo width="100%" height="160" />

            <InputArea>
                <SignInput 
                placeholder="E-mail ou nome de usuário"
                value={emailField}
                IconSvg={EmailIcon}
                onChangeText={t=>setEmailField(t)}
                />
                <SignInput 
                value={passwordField}
                placeholder="Senha"
                IconSvg={PasswordIcon}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />
                <CustomButton>
                    <CustomButtonText onPress={handleSignClick}>Entrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}