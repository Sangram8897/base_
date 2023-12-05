import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'
import { useSelector } from 'react-redux';
import themes from 'appearance/theme'
import useTheme from 'hooks/useTheme';
import TestList from './comp/test_list';

const Dashboard = ({ navigation }) => {
    const { themeColors, Layout, Common } = useTheme()

    return (
        <Container l>
            <Header
                headerTitle={'Dashboard'}
            />
            <View style={Common.innerContainer}>
                <TestList />
            </View>

        </Container>
    )
}

export default Dashboard

const styles = StyleSheet.create({})