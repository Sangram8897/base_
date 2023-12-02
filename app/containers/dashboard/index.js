import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'
import { useSelector } from 'react-redux';
import themes from 'appearance/theme'
import useTheme from 'hooks/useTheme';

const Dashboard = ({ navigation }) => {
    const themeMode = useSelector((state) => state.theme.mode);
    const { Colors } = useTheme()

    return (
        <Container>
            <Header
            headerTitle={'Dashboard'}
               // onBackbuttonPress={() => navigation.goBack()}
            />


        </Container>
    )
}

export default Dashboard

const styles = StyleSheet.create({})