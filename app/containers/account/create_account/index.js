import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'

const CreateAccount = ({ navigation }) => {

    return (
        <Container>
            <Header
                headerTitle={'Create Account'}
                hasBackButton={true}
                onBackbuttonPress={() => navigation.goBack()}
            />
        </Container>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({})