import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'
import AccountDetails from './comp/account_details'
import AccountStatistics from './comp/account_ statistics'
import useTheme from 'hooks/useTheme'

const Account = ({ navigation }) => {
    const { themeColors, Gutters, Common } = useTheme()

    return (
        <Container>
            <Header
                headerTitle={'Account'}
            />

            <View style={Common.innerContainer}>
                <ScrollView>
                    <AccountDetails />

                    <View style={{ height: 60 }} />

                    <AccountStatistics navigation={navigation} />
                </ScrollView>
            </View>

        </Container>
    )
}

export default Account;

const styles = StyleSheet.create({})