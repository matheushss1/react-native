import React, {useState} from 'react';
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

import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import PasswordIcon from '../../assets/lock.svg';
import ManicureLogo from '../../assets/manicure.svg';

export default () => {
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn '}]
        });
    };
    const handleSignClick = () => {

    };

    return (
        <Container>
            <ManicureLogo width="100%" height="160" />

            <InputArea>
                <SignInput 
                placeholder="Qual é o seu nome?"
                value={nameField}
                IconSvg={PersonIcon}
                onChangeText={t=>setNameField(t)}
                />
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
                    <CustomButtonText onPress={handleSignClick}>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Entre!</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    );
}