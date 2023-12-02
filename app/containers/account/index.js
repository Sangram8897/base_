import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'
import AccountDetails from './comp/account_details'
import AccountStatistics from './comp/account_ statistics'
import useTheme from 'hooks/useTheme'

const Account = ({ navigation }) => {
    const { themeColors, Layout, Common } = useTheme()
    return (
        <Container>
            <Header
                backgroundcolor={themeColors.header}
                headerTitle={'Account'}
            //  onBackbuttonPress={() => navigation.goBack()}
            />
            <View style={Common.innerContainer}>
                <AccountDetails />

                <View style={{ height: 60 }} />

                <AccountStatistics navigation={navigation} />

            </View>


        </Container>
    )
}

export default Account;

const styles = StyleSheet.create({})