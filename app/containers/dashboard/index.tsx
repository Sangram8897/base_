import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'
import { useSelector } from 'react-redux';
import themes from 'appearance/theme'
import useTheme from 'hooks/useTheme';

import { DashboardStatistics, HomeCarousel, UpcomingActivities, PipeLineProgress } from './comp';

const Dashboard = ({ navigation }) => {
  const { themeColors, Layout, Common } = useTheme()

  return (
    <Container >
      <Header
        headerTitle={'Dashboard'}
      />
      <View style={Common.innerContainer}>

        <View style={{ height: 15 }} />

        <DashboardStatistics />
        <View style={{ height: 15 }} />

        <View style={[Layout.fill, {
          backgroundColor: '#FFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }]}>

          <HomeCarousel />

          <UpcomingActivities />

          <PipeLineProgress/>
          
        </View>

      </View>

    </Container>
  )
}

export default Dashboard

const styles = StyleSheet.create({})