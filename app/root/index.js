import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigationStack from './navigation'
import { store } from '../store/configure_store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigationStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})