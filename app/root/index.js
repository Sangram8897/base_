import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigationStack from './navigation'
import { Provider } from 'react-redux'
import { store } from '../store/configure_store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigationStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})