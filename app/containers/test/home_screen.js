import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, Header } from 'components'

const HomeScreen = () => {
  console.log('log10','Welcome to jumanji');
  return (
    <Container isLoading={false}>
      <Header />

    </Container>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})