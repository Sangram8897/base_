import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'components'
import LoginComp from './comp/login'

const Login = ({ navigation }) => {

    const handleSubmitPress = () => {
       // navigation.navigate('BottomTab')
        // dispatch(loginRequest(formState.inputValues.username, formState.inputValues.password))
    };

    return (
        <Container>
           
            <LoginComp
                onSubmit={handleSubmitPress}
            />
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({})